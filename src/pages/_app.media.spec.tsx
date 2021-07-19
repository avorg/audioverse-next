import { queryByTestId, waitFor } from '@testing-library/dom';
import {
	act,
	getByLabelText,
	getByTestId,
	render,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import videojs from 'video.js';

import { Recording } from '@components/organisms/recording';
// import AndMiniplayer from '@components/templates/andMiniplayer';
import { PlayerFragment, RecordingFragment } from '@lib/generated/graphql';
import MyApp from '@pages/_app';

const recordingAudio: Partial<PlayerFragment> = {
	id: 'the_sermon_id',
	title: 'the_sermon_title',
	sequence: {
		title: 'the_sequence_title',
	},
	audioFiles: [
		{
			url: 'the_source_src',
			mimeType: 'the_source_type',
			filesize: 'the_source_size',
		},
	],
};

const recordingVideo: Partial<PlayerFragment> = {
	id: 'the_sermon_id',
	title: 'the_sermon_title',
	sequence: {
		title: 'the_sequence_title',
	},
	videoFiles: [
		{
			url: 'the_source_src',
			mimeType: 'the_source_type',
			filesize: 'the_source_size',
		},
	],
};

const recordingAudioVideo: Partial<PlayerFragment> = {
	id: 'the_sermon_id',
	title: 'the_sermon_title',
	sequence: {
		title: 'the_sequence_title',
	},
	videoFiles: [
		{
			url: 'video_source_src',
			mimeType: 'video_source_type',
			filesize: 'video_source_size',
		},
	],
	audioFiles: [
		{
			url: 'audio_source_src',
			mimeType: 'audio_source_type',
			filesize: 'audio_source_size',
		},
	],
};

const Page = ({
	includePlayer,
	recording,
}: {
	includePlayer: boolean;
	recording: Partial<PlayerFragment>;
}) => (
	<div>
		{includePlayer && <Recording recording={recording as RecordingFragment} />}
	</div>
);

const renderApp = async (
	includePlayer: boolean,
	recording: Partial<PlayerFragment>,
	container: any = undefined
) => {
	const result = await render(
		<MyApp
			Component={Page as any}
			pageProps={{ includePlayer, recording } as any}
		/>,
		{ container }
	);

	return {
		...result,
		getMiniplayer: () => result.getByLabelText('miniplayer'),
		getPlayer: () => result.getByLabelText('player'),
		expectVideoLocation: (location: HTMLElement) =>
			expect(getByTestId(location, 'video-element')).toBeInTheDocument(),
		rerender: (includePlayer: boolean) => {
			return renderApp(includePlayer, recording, result.container);
		},
	};
};

describe('app media playback', () => {
	it('moves video to and from miniplayer', async () => {
		await act(async () => {
			console.log('render in');
			const result = await renderApp(true, recordingVideo);

			userEvent.click(result.getByAltText('the_sermon_title'));

			await waitFor(() => result.expectVideoLocation(result.getPlayer()));

			console.log('render out');
			await result.rerender(false);

			await waitFor(() => {
				console.log('waiting');
				result.expectVideoLocation(result.getMiniplayer());
			});

			console.log('render in');
			await result.rerender(true);

			await waitFor(() => result.expectVideoLocation(result.getPlayer()));
		});
	});

	it('hides controls when video in miniplayer', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingVideo);

			userEvent.click(result.getByAltText('the_sermon_title'));

			await result.rerender(false);

			const miniplayer = result.getByLabelText('miniplayer');

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'pause')).toBeInTheDocument()
			);

			const controls = getByLabelText(miniplayer, 'pause').parentElement;

			expect(controls).toHaveClass('hidden');
		});
	});

	it('shows controls when video not in miniplayer', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingVideo);

			userEvent.click(result.getByAltText('the_sermon_title'));

			const miniplayer = result.getByLabelText('miniplayer');

			await waitFor(() => {
				expect(getByLabelText(miniplayer, 'pause')).toBeInTheDocument();
			});

			const controls = getByLabelText(miniplayer, 'pause').parentElement;

			expect(controls).not.toHaveClass('hidden');
		});
	});

	it('shows controls when not playing video', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingAudio);

			userEvent.click(result.getByLabelText('play'));

			const miniplayer = result.getByLabelText('miniplayer');

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'pause')).toBeInTheDocument()
			);

			const controls = getByLabelText(miniplayer, 'pause').parentElement;

			expect(controls).not.toHaveClass('hidden');
		});
	});

	it('handles pause event', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingVideo);

			userEvent.click(result.getByAltText('the_sermon_title'));

			const miniplayer = result.getByLabelText('miniplayer');

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'pause')).toBeInTheDocument()
			);

			const portal = result.getByTestId('portal');

			ReactTestUtils.Simulate.pause(
				getByTestId(portal, 'video-element'),
				{} as any
			);

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'play')).toBeInTheDocument()
			);
		});
	});

	it('handles play event', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingVideo);

			userEvent.click(result.getByAltText('the_sermon_title'));

			const miniplayer = result.getByLabelText('miniplayer');

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'pause')).toBeInTheDocument()
			);

			userEvent.click(getByLabelText(miniplayer, 'pause'));

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'play')).toBeInTheDocument()
			);

			const portal = result.getByTestId('portal');

			ReactTestUtils.Simulate.play(
				getByTestId(portal, 'video-element'),
				{} as any
			);

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'pause')).toBeInTheDocument()
			);
		});
	});

	it('moves player out of miniplayer when not showing video', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingAudioVideo);

			await waitFor(() => {
				expect(result.getByText('Audio')).toBeInTheDocument();
			});

			userEvent.click(result.getByText('Audio'));

			const miniplayer = result.getByLabelText('miniplayer');

			await waitFor(() =>
				expect(getByLabelText(miniplayer, 'play')).toBeInTheDocument()
			);

			expect(
				queryByTestId(miniplayer, 'video-element')
			).not.toBeInTheDocument();
		});
	});

	it('never shows video in miniplayer when still on detail page', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingAudioVideo);

			await waitFor(() => {
				expect(result.getByText('Audio')).toBeInTheDocument();
			});

			userEvent.click(result.getByText('Audio'));

			const player = result.getByLabelText('player');

			await waitFor(() => {
				expect(getByLabelText(player, 'play')).toBeInTheDocument();
			});

			userEvent.click(result.getByText('Video'));

			const miniplayer = result.getByLabelText('miniplayer');

			// expect video-element to never appear in miniplayer
			await expect(async () => {
				await waitFor(() => {
					expect(
						queryByTestId(miniplayer, 'video-element')
					).toBeInTheDocument();
				});
			}).rejects.toEqual(expect.anything());
		});
	});

	it('never shows video in miniplayer when loading recording by audio select', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingAudioVideo);

			await waitFor(() => {
				expect(result.getByText('Audio')).toBeInTheDocument();
			});

			userEvent.click(result.getByText('Audio'));

			const miniplayer = result.getByLabelText('miniplayer');
			const pane = miniplayer.querySelector('#mini-player');

			if (!pane) throw new Error('unable to find pane');

			pane.appendChild = jest.fn();

			const player = result.getByLabelText('player');

			await waitFor(() =>
				expect(getByLabelText(player, 'play')).toBeInTheDocument()
			);

			expect(pane.appendChild).not.toHaveBeenCalled();
		});
	});

	it('does not load video when audio selected for recording with video', async () => {
		await act(async () => {
			const result = await renderApp(true, recordingAudioVideo);

			await waitFor(() => {
				expect(result.getByText('Audio')).toBeInTheDocument();
			});

			userEvent.click(result.getByText('Audio'));

			expect(videojs).not.toBeCalledWith(
				expect.anything(),
				expect.objectContaining({
					sources: [{ src: 'video_source_src' }],
				})
			);
		});
	});
});
