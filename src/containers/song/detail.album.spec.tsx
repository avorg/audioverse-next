import { when } from 'jest-when';

import {
	GetSongAlbumPageDataDocument,
	GetSongAlbumPathsDataDocument,
} from '@lib/generated/graphql';
import { buildStaticRenderer, mockedFetchApi } from '@lib/test/helpers';
import Song, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/songs/album/[id]';

const renderPage = buildStaticRenderer(Song, getStaticProps, {
	language: 'en',
	id: 'the_album_id',
});

describe('song album detail page', () => {
	it('renders', async () => {
		await renderPage();

		expect(mockedFetchApi).toBeCalledWith(GetSongAlbumPageDataDocument, {
			variables: {
				id: 'the_album_id',
			},
		});
	});

	it('renders song list', async () => {
		when(mockedFetchApi)
			.calledWith(GetSongAlbumPageDataDocument, expect.anything())
			.mockResolvedValue({
				musicAlbum: {
					recordings: {
						nodes: [
							{
								id: 'first_song_id',
								title: 'first_song_title',
							},
							{
								id: 'second_song_id',
								title: 'second_song_title',
							},
						],
					},
				},
			});

		const { getByText } = await renderPage();

		expect(getByText('second_song_title')).toBeInTheDocument();
	});

	it('generates static paths', async () => {
		when(mockedFetchApi)
			.calledWith(GetSongAlbumPathsDataDocument, expect.anything())
			.mockResolvedValue({
				musicAlbums: {
					nodes: [
						{
							id: 'the_album_id',
						},
					],
				},
			});

		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en/songs/album/the_album_id');
	});

	it('renders 404', async () => {
		when(mockedFetchApi)
			.calledWith(GetSongAlbumPageDataDocument, expect.anything())
			.mockRejectedValue('oops');

		const { getByText } = await renderPage();

		expect(getByText('404')).toBeInTheDocument();
	});
});
