import userEvent from '@testing-library/user-event';
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

function loadData() {
	when(mockedFetchApi)
		.calledWith(GetAudiobookDetailPageDataDocument, expect.anything())
		.mockResolvedValue({
			audiobook: {
				sponsor: {
					title: 'the_sponsor_title',
					location: 'the_sponsor_location',
					website: 'the_sponsor_website',
				},
				recordings: {
					nodes: [
						{
							id: 'first_recording_id',
							title: 'first_recording_title',
							audioFiles: [
								{
									url: 'first_recording_url',
								},
							],
							audioDownloads: [
								{
									url: 'first_recording_download',
									filesize: '5242880',
								},
							],
						},
						{
							id: 'second_recording_id',
							title: 'second_recording_title',
							audioFiles: [
								{
									url: 'second_recording_url',
								},
							],
						},
					],
				},
			},
		});
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

	it('loads recording src', async () => {
		loadData();

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

	it('lists recordings', async () => {
		loadData();

		const { getByText } = await renderPage();

		expect(getByText('first_recording_title')).toBeInTheDocument();
	});

	it('switches recording on click', async () => {
		loadData();

		const { getByText } = await renderPage();

		userEvent.click(getByText('second_recording_title'));

		expect(videojs).toBeCalledWith(
			expect.anything(),
			expect.objectContaining({
				sources: [{ src: 'second_recording_url' }],
			})
		);
	});

	it('includes download links', async () => {
		loadData();

		const { getByRole } = await renderPage();

		const link = getByRole('link', { name: '5 MB' }) as HTMLLinkElement;

		expect(link).toHaveAttribute('href', 'first_recording_download');
	});

	it('indicates currently-playing recording', async () => {
		loadData();

		const { getByText } = await renderPage();

		expect(getByText('Now playing: first_recording_title')).toBeInTheDocument();
	});

	it('renders sponsor info', async () => {
		loadData();

		const { getByText } = await renderPage();

		expect(getByText('the_sponsor_title')).toBeInTheDocument();
	});

	it('displays sponsor website url', async () => {
		loadData();

		const { getByText } = await renderPage();

		expect(getByText('the_sponsor_website')).toBeInTheDocument();
	});

	// support isDownloadAllowed
	// includes download links for each recording
	// indicates which recording is playing
	// show book title
});
