import {
	getByText,
	queryByLabelText,
	queryByPlaceholderText,
	queryByText,
	waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import React from 'react';

import PlaylistButton from '@components/molecules/playlistButton';
import { setPlaylistMembership } from '@lib/api/setPlaylistMembership';
import {
	AddPlaylistDocument,
	GetPlaylistButtonDataDocument,
} from '@lib/generated/graphql';
import { sleep } from '@lib/sleep';
import {
	makePlaylistButtonData,
	mockedFetchApi,
	renderWithIntl,
	resolveWithDelay,
	withMutedReactQueryLogger,
} from '@lib/test/helpers';

jest.mock('@lib/api/setPlaylistMembership');

const loadComponentData = (playlists: any[] | undefined = undefined) => {
	when(mockedFetchApi)
		.calledWith(GetPlaylistButtonDataDocument, expect.anything())
		.mockResolvedValue(makePlaylistButtonData(playlists));
};

const renderComponent = async ({
	recordingId = 'recording_id',
}: {
	recordingId?: string;
} = {}) => {
	const result = await renderWithIntl(
		<PlaylistButton recordingId={recordingId} />
	);
	const container = result.container as HTMLElement;

	const getEntry = (playlistTitle: string) =>
		queryByText(container, playlistTitle);

	const getNewPlaylistInput = () =>
		queryByPlaceholderText(container, 'New Playlist') as HTMLInputElement;

	const getSubmitButton = () =>
		queryByText(container, 'Create') as HTMLButtonElement;

	return {
		...result,
		getButton: () => getByText(container, 'Add to Playlist'),
		waitForDataCall: (count = 1) =>
			waitFor(() => {
				const matches = mockedFetchApi.mock.calls.filter((c) => {
					return c[0] === GetPlaylistButtonDataDocument;
				});
				expect(matches).toHaveLength(count);
			}),
		getEntry,
		getCheckbox: (playlistTitle: string): HTMLInputElement =>
			queryByLabelText(container, playlistTitle) as HTMLInputElement,
		getNewPlaylistInput,
		getSubmitButton,
		userAddPlaylist: async (playlistTitle: string) => {
			await userEvent.type(getNewPlaylistInput(), playlistTitle);

			userEvent.click(getSubmitButton());
		},
	};
};

describe('playlist button', () => {
	it('shows error if user not logged in', async () => {
		const { getByText, getButton } = await renderComponent();

		userEvent.click(getButton());

		expect(
			getByText('You must be logged in to perform this action')
		).toBeInTheDocument();
	});

	it('does not show error if user logged in', async () => {
		loadComponentData();

		const { queryByText, getButton, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		userEvent.click(getButton());

		expect(
			queryByText('You must be logged in to perform this action')
		).not.toBeInTheDocument();
	});

	it('shows user playlists', async () => {
		loadComponentData();

		const { getCheckbox, getButton, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		userEvent.click(getButton());

		await waitFor(() =>
			expect(getCheckbox('playlist_title')).toBeInTheDocument()
		);
	});

	it('adds recording to playlist', async () => {
		loadComponentData();

		const { getEntry, getButton, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		userEvent.click(getButton());

		const entry = getEntry('playlist_title');

		if (entry) userEvent.click(entry);

		await waitFor(() =>
			expect(setPlaylistMembership).toBeCalledWith(
				'recording_id',
				'playlist_id',
				true
			)
		);
	});

	it('toggles checkbox', async () => {
		loadComponentData();

		const {
			getEntry,
			getCheckbox,
			getButton,
			waitForDataCall,
		} = await renderComponent();

		await waitForDataCall();

		userEvent.click(getButton());

		const entry = getEntry('playlist_title');

		if (entry) userEvent.click(entry);

		const checkbox = getCheckbox('playlist_title');

		expect(checkbox?.checked).toBeTruthy();
	});

	it('toggles back and forth', async () => {
		loadComponentData();

		const {
			getEntry,
			getCheckbox,
			getButton,
			waitForDataCall,
		} = await renderComponent();

		await waitForDataCall();

		userEvent.click(getButton());

		const entry = getEntry('playlist_title');

		if (entry) userEvent.click(entry);
		if (entry) userEvent.click(entry);

		const checkbox = getCheckbox('playlist_title');

		expect(checkbox?.checked).toBeFalsy();
	});

	it('removes item from playlist', async () => {
		loadComponentData();

		const { getEntry, getButton, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		userEvent.click(getButton());

		const entry = getEntry('playlist_title');

		if (entry) userEvent.click(entry);
		if (entry) userEvent.click(entry);

		await waitFor(() => {
			expect(setPlaylistMembership).toBeCalledWith(
				'recording_id',
				'playlist_id',
				false
			);
		});
	});

	it('uses playlists', async () => {
		const { waitForDataCall } = await renderComponent({
			recordingId: 'recording_id',
		});

		await waitForDataCall();
	});

	it('busts playlist cache on entry toggle', async () => {
		loadComponentData();

		const { getEntry, getButton, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		userEvent.click(getButton());

		const entry = getEntry('playlist_title');

		if (entry) userEvent.click(entry);

		await waitForDataCall(2);
	});

	it('gets playlists using recording id', async () => {
		loadComponentData([]);

		await renderComponent({
			recordingId: 'recording_id',
		});

		await waitFor(() =>
			expect(mockedFetchApi).toBeCalledWith(GetPlaylistButtonDataDocument, {
				variables: {
					language: 'ENGLISH',
					recordingId: 'recording_id',
				},
			})
		);
	});

	it('loads checkbox state from api response', async () => {
		loadComponentData([
			{
				id: 'playlist_id',
				title: 'playlist_title',
				hasRecording: true,
			},
		]);

		const { waitForDataCall, getCheckbox } = await renderComponent();

		await waitForDataCall();

		expect(getCheckbox('playlist_title')?.checked).toBeTruthy();
	});

	it('does not set membership without user action', async () => {
		loadComponentData([]);

		const { waitForDataCall } = await renderComponent();

		await waitForDataCall();

		expect(setPlaylistMembership).not.toBeCalled();
	});

	it('creates playlist', async () => {
		loadComponentData([]);
		const { userAddPlaylist, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		await userAddPlaylist('the_title');

		await waitFor(() =>
			expect(mockedFetchApi).toBeCalledWith(AddPlaylistDocument, {
				variables: {
					language: 'ENGLISH',
					title: 'the_title',
					recordingIds: ['recording_id'],
					isPublic: false,
				},
			})
		);
	});

	it('busts playlist cache on playlist create', async () => {
		loadComponentData([]);

		const { userAddPlaylist, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		await userAddPlaylist('the_title');

		await waitForDataCall(2);
	});

	it('resets new playlist input on create', async () => {
		loadComponentData([]);

		const {
			getNewPlaylistInput,
			userAddPlaylist,
			waitForDataCall,
		} = await renderComponent();

		await waitForDataCall();

		await userAddPlaylist('the_title');

		expect(getNewPlaylistInput().value).toBeFalsy();
	});

	it('adds recording to new playlist on create', async () => {
		loadComponentData([]);

		const { userAddPlaylist, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		await userAddPlaylist('the_title');

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(AddPlaylistDocument, {
				variables: {
					language: 'ENGLISH',
					title: 'the_title',
					recordingIds: ['recording_id'],
					isPublic: false,
				},
			});
		});
	});

	it('uses separate playlist caches for separate recordings', async () => {
		loadComponentData([]);

		const { waitForDataCall } = await renderComponent({
			recordingId: 'recording1',
		});

		await renderComponent({
			recordingId: 'recording2',
		});

		await waitForDataCall(2);
	});

	it('adds playlist optimistically', async () => {
		loadComponentData([]);

		const {
			userAddPlaylist,
			waitForDataCall,
			getEntry,
		} = await renderComponent();

		await waitForDataCall();

		await userAddPlaylist('the_title');

		await waitFor(() => expect(getEntry('the_title')).toBeInTheDocument());
	});

	it('defaults new playlist checkbox to checked', async () => {
		loadComponentData([]);

		const {
			waitForDataCall,
			getCheckbox,
			userAddPlaylist,
		} = await renderComponent();

		await waitForDataCall();

		resolveWithDelay(mockedFetchApi, 50, makePlaylistButtonData([]));

		await userAddPlaylist('the_title');

		await waitFor(() => {
			const checkbox = getCheckbox('the_title');
			expect(checkbox?.checked).toBeTruthy();
		});
	});

	it('cancels old queries to avoid clobbering optimistic update', async () => {
		// Setup & initial render

		loadComponentData([]);

		const {
			waitForDataCall,
			userAddPlaylist,
			getEntry,
		} = await renderComponent();

		await waitForDataCall();

		// Load slow query to clobber

		resolveWithDelay(mockedFetchApi, 50, {
			me: {
				user: {
					playlists: {
						nodes: [
							{
								id: 'id1',
								title: 'playlist1',
								hasRecording: true,
							},
						],
					},
				},
			},
		});

		// Add first playlist

		await userAddPlaylist('playlist1');

		// Wait for slow response to be requested

		await waitForDataCall(2);

		// Load second, fast response

		loadComponentData([
			{
				id: 'id1',
				title: 'playlist1',
				hasRecording: true,
			},
			{
				id: 'id2',
				title: 'playlist2',
				hasRecording: true,
			},
		]);

		// Add second playlist

		await userAddPlaylist('playlist2');

		// Sleep

		await sleep({ ms: 200 });

		// Check that first, slow response didn't clobber second, fast response

		expect(getEntry('playlist2')).toBeInTheDocument();
	});

	it('rolls back if mutation fails', async () => {
		await withMutedReactQueryLogger(async () => {
			mockedFetchApi.mockResolvedValue(makePlaylistButtonData());

			const {
				waitForDataCall,
				userAddPlaylist,
				getEntry,
			} = await renderComponent();

			await waitForDataCall();

			// load new playlist into response to avoid cache invalidation causing a pass
			resolveWithDelay(mockedFetchApi, 50, makePlaylistButtonData());

			when(mockedFetchApi)
				.calledWith(AddPlaylistDocument, expect.anything())
				.mockRejectedValue('Oops!');

			await userAddPlaylist('the_title');

			await waitFor(() => {
				expect(getEntry('the_title')).toBeInTheDocument();
			});

			await waitFor(() => {
				expect(getEntry('the_title')).toBeNull();
			});
		});
	});

	it('has privacy switcher', async () => {
		loadComponentData([]);

		const { getByLabelText, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		expect(getByLabelText('Public')).toBeInTheDocument();
	});

	it('does not check public box by default', async () => {
		loadComponentData([]);

		const { getByLabelText, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		const checkbox = getByLabelText('Public') as HTMLInputElement;

		expect(checkbox).not.toBeChecked();
	});

	it('allows checkbox to be checked', async () => {
		loadComponentData([]);

		const { getByLabelText, waitForDataCall } = await renderComponent();

		await waitForDataCall();

		const checkbox = getByLabelText('Public') as HTMLInputElement;

		userEvent.click(checkbox);

		expect(checkbox).toBeChecked();
	});

	it('creates public playlist', async () => {
		loadComponentData([]);

		const {
			getByLabelText,
			waitForDataCall,
			userAddPlaylist,
		} = await renderComponent();

		await waitForDataCall();

		const checkbox = getByLabelText('Public') as HTMLInputElement;

		userEvent.click(checkbox);

		await userAddPlaylist('the_title');

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(AddPlaylistDocument, {
				variables: {
					language: 'ENGLISH',
					title: 'the_title',
					recordingIds: ['recording_id'],
					isPublic: true,
				},
			});
		});
	});

	it('resets public checkbox on playlist creation', async () => {
		loadComponentData([]);

		const {
			getByLabelText,
			waitForDataCall,
			userAddPlaylist,
		} = await renderComponent();

		await waitForDataCall();

		const checkbox = getByLabelText('Public') as HTMLInputElement;

		userEvent.click(checkbox);

		await userAddPlaylist('the_title');

		expect(checkbox).not.toBeChecked();
	});
});
