import { when } from 'jest-when';
import videojs from 'video.js';

import {
	GetAudiobookDetailPageDataDocument,
	GetAudiobookDetailPathsDataDocument,
} from '@lib/generated/graphql';
import { loadRouter, mockedFetchApi, renderWithIntl } from '@lib/test/helpers';
import Audiobook, {
	getStaticPaths,
	getStaticProps,
	GetStaticPropsArgs,
} from '@pages/[language]/books/[id]';

jest.mock('video.js');

async function renderPage(params: Partial<GetStaticPropsArgs['params']> = {}) {
	loadRouter({ query: params });

	const { props } = await getStaticProps({
		params: { language: 'en', id: 'the_book_id', ...params },
	});

	return renderWithIntl(Audiobook, props);
}

describe('audiobook detail page', () => {
	it('renders', async () => {
		await renderPage();

		expect(mockedFetchApi).toBeCalledWith(GetAudiobookDetailPageDataDocument, {
			variables: {
				id: 'the_book_id',
			},
		});
	});

	it('loads player', async () => {
		await renderPage();

		expect(videojs).toBeCalled();
	});

	it('loads recording src', async () => {
		when(mockedFetchApi)
			.calledWith(GetAudiobookDetailPageDataDocument, expect.anything())
			.mockResolvedValue({
				audiobook: {
					recordings: {
						nodes: [
							{
								audioFiles: [
									{
										url: 'first_recording_url',
									},
								],
							},
						],
					},
				},
			});

		await renderPage();

		expect(videojs).toBeCalledWith(
			expect.anything(),
			expect.objectContaining({
				sources: [{ src: 'first_recording_url' }],
			})
		);
	});

	it('generates paths', async () => {
		when(mockedFetchApi)
			.calledWith(GetAudiobookDetailPathsDataDocument, expect.anything())
			.mockResolvedValue({
				audiobooks: {
					nodes: [
						{
							id: 'the_book_id',
						},
					],
				},
			});

		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en/books/the_book_id');
	});

	// lists recordings
	// loads recording src
	// includes download links for each recording
	// switches player src on recording click
	// show book title
});