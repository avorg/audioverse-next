import { ParsedUrlQuery } from 'querystring';

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import * as feed from 'feed';
import { when } from 'jest-when';
import _ from 'lodash';
import { GetServerSidePropsResult } from 'next';
import * as router from 'next/router';
import { NextRouter } from 'next/router';
import React, { ComponentType, ReactElement } from 'react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { PartialDeep } from 'type-fest';
import videojs from 'video.js';

import withIntl from '@components/HOCs/withIntl';
import { fetchApi } from '@lib/api';
import {
	GetPlaylistButtonDataQuery,
	GetWithAuthGuardDataDocument,
} from '@lib/generated/graphql';
import { sleep } from '@lib/sleep';

export const mockedFetchApi = fetchApi as jest.Mock;

// TODO: Delete this and mock @lib/writeFeedFile instead, except in writeFeedFile.spec.ts
export const mockFeed = (): { addItem: any; rss2: any } => {
	const addItem = jest.fn();
	const rss2 = jest.fn();
	jest.spyOn(feed, 'Feed').mockImplementation(() => ({ addItem, rss2 } as any));

	return { addItem, rss2 };
};

export function loadQuery(query: ParsedUrlQuery = {}): void {
	loadRouter({ query });
}

export function loadRouter(router_: Partial<NextRouter>): void {
	const val = {
		events: {
			on: () => undefined,
		},
		prefetch: async () => undefined,
		...router_,
	};
	jest.spyOn(router, 'useRouter').mockReturnValue(val as any);
}

export function loadAuthGuardData(email: any = 'the_email'): void {
	when(mockedFetchApi)
		.calledWith(GetWithAuthGuardDataDocument, expect.anything())
		.mockResolvedValue({
			me: {
				user: {
					email,
				},
			},
		});
}

export function buildLoader<T>(
	document: string,
	defaults: PartialDeep<T>
): (data?: PartialDeep<T>) => T {
	// TODO: Figure out how to set T to actual query return type
	// https://spin.atomicobject.com/2017/03/15/typescript-generate-test-data/
	// https://github.com/willryan/factory.ts/blob/master/src/sync.ts
	// It will already accept the type manually:
	// const loadData = buildLoader<GetHomeStaticPropsQuery>(GetHomeStaticPropsDocument, { .. })
	// should disallow including data in defaults that isn't in type
	return (data: PartialDeep<T> | Record<string, never> = {}) => {
		const value = _.defaultsDeep(data, defaults);
		when(mockedFetchApi)
			.calledWith(document, expect.anything())
			.mockResolvedValue(value);
		return value;
	};
}

// TODO: Only accept props if getProps not provided
// TODO: Only accept params if getProps provided
type RendererOptions<P> = {
	params?: Partial<P>;
	props?: any; // TODO: restrict to props component actually accepts
	router?: Partial<NextRouter>;
};

type Renderer<P> = (
	options?: RendererOptions<P>
) => Promise<RenderResult & { queryClient: QueryClient }>;

// TODO: Consider how to simplify this function. Perhaps extract a simple
//   version and rename this function to `buildPageRenderer` or similar.
export function buildRenderer<
	C extends ComponentType<any>,
	F extends (params: any) => Promise<any>,
	P extends Partial<Parameters<F>[0]['params']>
>(
	Component: C,
	options: {
		getProps?: F;
		defaultParams?: P;
		defaultProps?: any; // TODO: restrict to props component actually accepts
	} = {}
): Renderer<P> {
	const {
		getProps = undefined,
		defaultParams = {},
		defaultProps = {},
	} = options;
	return async (
		options: RendererOptions<P> = {}
	): Promise<RenderResult & { queryClient: QueryClient }> => {
		const { params = {}, props, router = {} } = options;
		const fullParams = { ...defaultParams, ...params };
		const props_ = getProps
			? await getProps(fullParams)
			: props || defaultProps;
		loadRouter({ query: fullParams, ...router });
		return renderWithIntl(<Component {...props_} />);
	};
}

export function buildStaticRenderer<
	C extends ComponentType<any>,
	F extends ({ params }: { params: any }) => Promise<{ props: any }>,
	P extends Partial<Parameters<F>[0]['params']>
>(Component: C, getStaticProps: F, defaultParams: P = {} as P): Renderer<P> {
	const getProps = async (p: any) =>
		(await getStaticProps({ params: p })).props;

	return buildRenderer(Component, { getProps, defaultParams });
}

export function buildServerRenderer<
	C extends ComponentType<any>,
	F extends (context: any) => Promise<GetServerSidePropsResult<any>>,
	P extends Partial<Parameters<F>[0]['params']>
>(
	Component: C,
	getServerSideProps: F,
	defaultParams: P = {} as P
): Renderer<P> {
	const getProps = async (p: any) => {
		const result = await getServerSideProps({ params: p, query: p } as any);
		if (!('props' in result)) {
			throw new Error('Failed to get server props');
		}
		return result.props;
	};

	return buildRenderer(Component, { getProps, defaultParams });
}

// TODO: Merge with buildRenderer, or just make it private
export async function renderWithIntl(
	ui: ReactElement,
	renderOptions?: RenderOptions
): Promise<RenderResult & { queryClient: QueryClient }> {
	const WithIntl = withIntl(() => ui);

	return renderWithQueryProvider(<WithIntl />, renderOptions);
}

// TODO: Merge with buildRenderer, or just make it private
export async function renderWithQueryProvider(
	ui: ReactElement,
	renderOptions?: RenderOptions
): Promise<RenderResult & { queryClient: QueryClient }> {
	const queryClient = new QueryClient();
	const result = await render(
		<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
		renderOptions
	);

	return {
		...result,
		queryClient,
	};
}

export function resolveWithDelay(
	mock: jest.SpyInstance,
	ms = 50,
	value: any = undefined
): void {
	mock.mockImplementation(() => sleep({ ms, value }));
}

export async function withMutedReactQueryLogger(
	func: () => Promise<any>
): Promise<any> {
	const noop = () => {
		// do nothing
	};

	setLogger({
		log: noop,
		warn: noop,
		error: noop,
	});

	const result = await func();

	setLogger(window.console);

	return result;
}

export const makePlaylistButtonData = (
	playlists: any[] | undefined = undefined
): GetPlaylistButtonDataQuery => {
	const value = playlists || [
		{
			id: 'playlist_id',
			title: 'playlist_title',
		},
	];

	return _.set({} as any, 'me.user.playlists.nodes', value);
};

interface SetPlayerMockOptions {
	isPaused?: boolean;
	time?: number;
	duration?: number;
	volume?: number;
	playbackRate?: number;
	functions?: Partial<videojs.Player>;
	supportsFullScreen?: boolean;
	isFullscreen?: boolean;
}

type MockPlayer = Pick<
	videojs.Player,
	| 'play'
	| 'pause'
	| 'paused'
	| 'currentTime'
	| 'duration'
	| 'src'
	| 'volume'
	| 'options'
	| 'controlBar'
	| 'playbackRate'
	| 'requestFullscreen'
	| 'controls'
	| 'supportsFullScreen'
	| 'on'
> & {
	_updateOptions: (options: SetPlayerMockOptions) => void;
	_fire: (event: string, data?: any) => void;
};

export const mockVideojs = (videojs as unknown) as jest.Mock;

export function setPlayerMock(options: SetPlayerMockOptions = {}): MockPlayer {
	let {
		isPaused = true,
		time = 50,
		duration = 100,
		volume = 0.5,
		playbackRate = 1,
		functions = {},
	} = options;
	const { supportsFullScreen = true, isFullscreen = false } = options;

	const handlers: Record<string, Array<(data: any) => any>> = {};

	const mockPlayer: MockPlayer = {
		_updateOptions: (options) => {
			const update = (key: keyof SetPlayerMockOptions, fallback: any) => {
				if (!(key in options)) return fallback;
				if (options[key] === undefined) return fallback;
				return options[key];
			};
			isPaused = update('isPaused', isPaused);
			time = update('time', time);
			duration = update('duration', duration);
			functions = update('functions', functions);
		},
		_fire: (event: string, data: any = null) => {
			handlers[event]?.map((fn: (data: any) => any) => fn(data));
		},
		play: jest.fn(async () => {
			isPaused = false;
		}),
		pause: jest.fn(() => {
			isPaused = true;
			return (mockPlayer as unknown) as videojs.Player;
		}),
		paused: jest.fn(() => isPaused),
		currentTime: jest.fn((newTime: number | null = null) => {
			if (newTime !== null) time = newTime;
			return time;
		}),
		volume: jest.fn((newVolume: number | null = null) => {
			if (newVolume !== null) volume = newVolume;
			return volume;
		}) as any,
		duration: jest.fn(() => duration),
		src: jest.fn(),
		options: jest.fn(),
		controlBar: {
			createEl: jest.fn(),
			dispose: jest.fn(),
		} as any,
		playbackRate: jest.fn((newRate?: number) => {
			if (newRate) playbackRate = newRate;
			return playbackRate;
		}),
		requestFullscreen: jest.fn(),
		controls: jest.fn(),
		supportsFullScreen: jest.fn(() => supportsFullScreen),
		isFullscreen: jest.fn(() => isFullscreen),
		on: jest.fn((event: string, fn: (data: any) => any) => {
			if (!(event in handlers)) handlers[event] = [];
			handlers[event].push(fn);
		}) as any,
		...functions,
	};

	mockVideojs.mockReturnValue(mockPlayer);

	return mockPlayer;
}
