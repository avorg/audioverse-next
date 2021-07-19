import { RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as intl from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';

import ButtonFavorite from '@components/molecules/buttonFavorite';
import CardPlayable from '@components/molecules/cardPlayable';
import Login from '@components/molecules/login';
import PlaylistButton from '@components/molecules/playlistButton';
import SpeakerName from '@components/molecules/speakerName';
import Footer from '@components/organisms/footer';
import Header from '@components/organisms/header';
import AccountPlaylists from '@containers/account/playlists';
import Profile from '@containers/account/profile';
import Register from '@containers/account/register';
import Reset from '@containers/account/reset';
import Audiobook from '@containers/audiobook/audiobook';
import Audiobooks from '@containers/audiobook/audiobooks';
import Book from '@containers/bible/book';
import ConferenceDetail from '@containers/conference/detail';
import ConferenceList from '@containers/conference/list';
import Home from '@containers/home';
import Playlists from '@containers/playlist/list';
import Presenter from '@containers/presenter/detail';
import Presenters from '@containers/presenter/list';
import SeriesDetail from '@containers/series/detail';
import SeriesList from '@containers/series/list';
import SermonDetail, { Sermon } from '@containers/sermon/detail';
import SongList from '@containers/song/list';
import SponsorAlbums from '@containers/sponsor/albums';
import SponsorBooks from '@containers/sponsor/books';
import SponsorConferences from '@containers/sponsor/conferences';
import Sponsors from '@containers/sponsor/list';
import SponsorSeries from '@containers/sponsor/series';
import SponsorTeachings from '@containers/sponsor/teachings';
import Stories from '@containers/story/stories';
import TagList from '@containers/tag/list';
import * as api from '@lib/api';
import { isPersonFavorited, isRecordingFavorited } from '@lib/api';
import { GetWithAuthGuardDataDocument, Person } from '@lib/generated/graphql';
import { getLanguageDisplayNames } from '@lib/getLanguageDisplayNames';
import { readableBytes } from '@lib/readableBytes';
import {
	loadAuthGuardData,
	makePlaylistButtonData,
	mockedFetchApi,
	renderWithQueryProvider,
} from '@lib/test/helpers';
import { useFormattedDuration } from '@lib/time';
import Logout from '@pages/[language]/account/logout';

jest.mock('react-intl');
jest.mock('@lib/api/isRecordingFavorited');
jest.mock('@lib/api/isPersonFavorited');
jest.mock('react-toastify');
jest.mock('@lib/readableBytes');
jest.mock('@lib/time');
jest.mock('@lib/api/logout');

const expectNoUnlocalizedText = (
	screen: RenderResult,
	whitelist: string[] = []
) => {
	const {
		queryAllByText,
		queryAllByAltText,
		queryAllByPlaceholderText,
		queryAllByLabelText,
	} = screen;
	const r = /[^z\d\W\s]+/;
	const languageNames = getLanguageDisplayNames();
	const whitelist_ = [...languageNames, ...whitelist];
	const m = (c: string) => !!c.match(r) && !whitelist_.includes(c);
	const hits = [
		...queryAllByText(m),
		...queryAllByAltText(m),
		...queryAllByPlaceholderText(m),
		...queryAllByLabelText(m),
	];

	expect(hits).toHaveLength(0);
};

const expectNoUnlocalizedToasts = () => {
	const calls = ((toast as any) as jest.Mock).mock.calls;
	calls.forEach((c) => {
		expect(c[0]).not.toMatch(/[^z]+/);
	});
};

const expectNoUnlocalizedMessages = async <T extends unknown>(
	Component: React.ComponentType<T>,
	data: { [key: string]: any }
) => {
	const screen = await renderWithQueryProvider(
		<Component {...(data as any)} />
	);

	expectNoUnlocalizedText(screen);
	expectNoUnlocalizedToasts();
};

const toLocaleStringBackup = global.Date.prototype.toLocaleString;

describe('localization usage', () => {
	beforeEach(() => {
		jest.resetAllMocks();

		jest.spyOn(intl, 'FormattedMessage').mockImplementation((() => 'z') as any);
		jest
			.spyOn(FormattedMessage.prototype, 'shouldComponentUpdate')
			.mockImplementation(() => true);

		const formatter = jest.fn();
		formatter.mockReturnValue('z');
		jest.spyOn(intl, 'useIntl').mockReturnValue({
			formatMessage: formatter,
		} as any);

		(readableBytes as jest.Mock).mockReturnValue('z');
		(useFormattedDuration as jest.Mock).mockReturnValue('z');
	});

	beforeAll(() => {
		global.Date.prototype.toLocaleString = jest.fn(() => 'z');
	});

	afterAll(() => {
		global.Date.prototype.toLocaleString = toLocaleStringBackup;
	});

	it('localizes playlistButton logged out', async () => {
		const screen = await renderWithQueryProvider(
			<PlaylistButton recordingId={'recording_id'} />
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes playlistButton logged in', async () => {
		mockedFetchApi.mockResolvedValue(makePlaylistButtonData([]));

		const screen = await renderWithQueryProvider(
			<PlaylistButton recordingId={'recording_id'} />
		);

		await waitFor(() => expect(mockedFetchApi).toHaveBeenCalled());

		expectNoUnlocalizedText(screen);
	});

	it('localizes speakerName', async () => {
		const screen = await renderWithQueryProvider(
			<SpeakerName
				person={
					{
						id: 'z',
						name: 'z',
					} as Person
				}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes sermon detail page', async () => {
		const screen = await renderWithQueryProvider(
			<SermonDetail
				sermon={
					{
						description: 'z',
						recordingDate: '2003-03-01T09:30:00.000Z',
						recordingTags: {
							nodes: [
								{
									tag: {
										id: 'z',
										name: 'z',
									},
								},
							],
						},
						videoDownloads: [
							{
								id: 'z',
								url: 'z',
								filesize: '100',
							},
						],
					} as Sermon
				}
				title={null}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes Unfavorite button', async () => {
		jest.spyOn(api, 'isRecordingFavorited').mockResolvedValue(true);

		const screen = await renderWithQueryProvider(
			<ButtonFavorite id={'recording_id'} />
		);

		await waitFor(() => expect(isRecordingFavorited).toBeCalled());

		expectNoUnlocalizedText(screen);
	});

	it('localizes SpeakerName login error', async () => {
		const { getByRole } = await renderWithQueryProvider(
			<SpeakerName person={{} as Person} />
		);

		await waitFor(() => expect(isPersonFavorited).toBeCalled());

		const byRole = getByRole('button');

		userEvent.click(byRole);

		expectNoUnlocalizedToasts();
	});

	it('localizes tag list page', async () => {
		const screen = await renderWithQueryProvider(
			<TagList
				nodes={[
					{
						id: 'z',
						name: 'z',
					},
				]}
				pagination={{ current: 0, total: 0 }}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes header', async () => {
		const screen = await renderWithQueryProvider(<Header />);

		expectNoUnlocalizedText(screen, ['AudioVerse']);
	});

	it('localizes Bible book page', async () => {
		const screen = await renderWithQueryProvider(
			<Book
				data={{
					audiobible: {
						title: 'z',
						book: {
							title: 'z',
							shareUrl: 'z',
							chapters: [
								{
									title: 'z',
									url: '',
									id: 'z',
									verses: [],
								},
							],
						},
						sponsor: {
							name: 'z',
							url: 'z',
						},
						copyrightText: 'z',
					},
				}}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes footer', async () => {
		const screen = await renderWithQueryProvider(<Footer />);

		expectNoUnlocalizedText(screen, [
			'Types & Symbols',
			'Русский',
			'Français',
			'Español',
			'English',
			'Deutsch',
		]);
	});

	it('localizes audiobooks list page', async () => {
		const screen = await renderWithQueryProvider(
			<Audiobooks
				nodes={[
					{
						id: 'z',
						title: 'z',
						imageWithFallback: {
							url: 'z',
						},
					},
				]}
				pagination={{ total: 1, current: 1 }}
				data={undefined as any}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes audiobook detail page', async () => {
		const screen = await renderWithQueryProvider(
			<Audiobook audiobook={undefined as any} rssPath={''} />
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes stories list page', async () => {
		const screen = await renderWithQueryProvider(
			<Stories
				nodes={[
					{
						id: 'the_story_id',
						duration: 100,
					} as any,
				]}
				pagination={undefined as any}
				data={undefined as any}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes songs list page', async () => {
		const screen = await renderWithQueryProvider(
			<SongList data={undefined as any} />
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes conferences list page', async () => {
		const screen = await renderWithQueryProvider(
			<ConferenceList
				nodes={[{ id: 'z' }] as any}
				pagination={undefined as any}
				data={undefined as any}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes conference detail page', async () => {
		const screen = await renderWithQueryProvider(
			<ConferenceDetail
				nodes={[{ id: 'z' }] as any}
				data={undefined as any}
				pagination={undefined as any}
				rssPath={''}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes presenter list page', async () => {
		const screen = await renderWithQueryProvider(
			<Presenters
				nodes={[{ id: 'z' }] as any}
				pagination={undefined as any}
				data={undefined as any}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes presenter detail page', async () => {
		const screen = await renderWithQueryProvider(
			<Presenter
				rssPath={'rssPath'}
				nodes={[{ id: 'id' }] as any}
				data={undefined as any}
				pagination={undefined as any}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	it('localizes sponsor list page', async () => {
		const screen = await renderWithQueryProvider(
			<Sponsors
				nodes={[
					{
						id: 'z',
						imageWithFallback: {
							url: 'z',
						},
					} as any,
				]}
				{...({} as any)}
			/>
		);

		expectNoUnlocalizedText(screen);
	});

	const scenarios: [React.ComponentType<any>, any][] = [
		[SponsorTeachings, { nodes: [{ id: 'z' }] }],
		[SponsorBooks, { nodes: [{ id: 'z' }] }],
		[SponsorAlbums, { nodes: [{ id: 'z' }] }],
		[SponsorConferences, { nodes: [{ id: 'z' }] }],
		[SponsorSeries, { nodes: [{ id: 'z' }] }],
		[SeriesList, { nodes: [{ id: 'z' }] }],
		[SeriesDetail, { nodes: [{ id: 'z' }] }],
		[Playlists, {}],
		[Logout, {}],
		[Register, {}],
		[Login, {}],
		[Reset, {}],
		[Profile, {}],
		[Home, {}],
		[CardPlayable, { title: 'z', container: { length: 2, index: 1 } }],
	];

	scenarios.map((s: [React.ComponentType, any], i: number) => {
		it(`Localizes scenario index ${i}`, async () => {
			await expectNoUnlocalizedMessages(...s);
		});
	});

	it('localizes profile page', async () => {
		loadAuthGuardData();

		const screen = await renderWithQueryProvider(<Profile />);

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(
				GetWithAuthGuardDataDocument,
				expect.anything()
			);
		});

		expectNoUnlocalizedText(screen);
		expectNoUnlocalizedToasts();
	});

	it('localizes playlists page', async () => {
		loadAuthGuardData();

		const screen = await renderWithQueryProvider(<AccountPlaylists />);

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(
				GetWithAuthGuardDataDocument,
				expect.anything()
			);
		});

		expectNoUnlocalizedText(screen);
		expectNoUnlocalizedToasts();
	});
});
