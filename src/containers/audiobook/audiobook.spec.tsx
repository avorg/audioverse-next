import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import React from 'react';
import videojs from 'video.js';

import AndMiniplayer from '@components/templates/andMiniplayer';
import { AudiobookProps } from '@containers/audiobook/audiobook';
import {
	GetAudiobookDetailPageDataDocument,
	GetAudiobookDetailPageDataQuery,
	GetAudiobookDetailPathsDataDocument,
} from '@lib/generated/graphql';
import { buildStaticRenderer, mockedFetchApi } from '@lib/test/helpers';
import writeFeedFile from '@lib/writeFeedFile';
import Audiobook, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/books/[id]';

jest.mock('video.js');
jest.mock('@lib/writeFeedFile');

const renderPage = buildStaticRenderer(
	(props: AudiobookProps) => {
		return (
			<AndMiniplayer>
				<Audiobook {...props} />
			</AndMiniplayer>
		);
	},
	getStaticProps,
	{
		language: 'en',
		id: 'the_book_id',
	}
);

function loadData(data: Partial<GetAudiobookDetailPageDataQuery> = {}) {
	when(mockedFetchApi)
		.calledWith(GetAudiobookDetailPageDataDocument, expect.anything())
		.mockResolvedValue({
			audiobook: {
				title: 'the_book_title',
				shareUrl: 'the_book_share_url',
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
							copyrightYear: 1999,
							sponsor: {
								title: 'first_recording_sponsor_title',
							},
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
			...data,
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

		const { getByLabelText } = await renderPage();

		userEvent.click(getByLabelText('play'));

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

		expect(getByText('second_recording_title')).toBeInTheDocument();
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

		expect(link).toHaveAttribute('href', '/first_recording_download');
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

	it('displays copyright', async () => {
		loadData();

		const { getByText } = await renderPage();

		expect(getByText('Copyright ⓒ1999 first_recording_sponsor_title'));
	});

	it('dedupes copyright', async () => {
		loadData({
			audiobook: {
				recordings: {
					nodes: [
						{
							id: 'first',
							copyrightYear: 1999,
							sponsor: {
								title: 'the_sponsor_title',
							},
						},
						{
							id: 'second',
							copyrightYear: 1999,
							sponsor: {
								title: 'the_sponsor_title',
							},
						},
					],
				},
			},
		} as any);

		const { getByText } = await renderPage();

		expect(getByText('Copyright ⓒ1999 the_sponsor_title')).toBeInTheDocument();
	});

	it('includes explanation for multiple copyrights', async () => {
		loadData();

		const { getByText } = await renderPage();

		expect(
			getByText(
				'Portions of this production are covered under the following license terms:'
			)
		);
	});

	it('leaves out multiple copyright explanation if only one copyright', async () => {
		loadData({
			audiobook: {
				recordings: {
					nodes: [
						{
							id: 'first',
							copyrightYear: 1999,
							sponsor: {
								title: 'the_sponsor_title',
							},
						},
						{
							id: 'second',
							copyrightYear: 1999,
							sponsor: {
								title: 'the_sponsor_title',
							},
						},
					],
				},
			},
		} as any);

		const { queryByText } = await renderPage();

		expect(
			queryByText(
				'Portions of this audiobook are covered under the following license terms:'
			)
		).not.toBeInTheDocument();
	});

	it('renders RSS feed', async () => {
		loadData();

		await getStaticProps({
			params: { language: 'en', id: 'the_book_id' },
		});

		expect(writeFeedFile).toBeCalledWith({
			recordings: expect.any(Array),
			projectRelativePath: 'public/en/books/the_book_id.xml',
			title: 'the_book_title : AudioVerse audiobook',
		});
	});

	it('links to rss feed', async () => {
		loadData();

		const { getByText } = await renderPage();

		const link = getByText('RSS') as HTMLLinkElement;

		expect(link).toHaveAttribute('href', '/en/books/the_book_id.xml');
	});

	it('displays share url', async () => {
		loadData();

		const { getByLabelText } = await renderPage();

		const input = getByLabelText('Short URL') as HTMLInputElement;

		expect(input).toHaveValue('the_book_share_url');
	});

	// support isDownloadAllowed
	// includes download links for each recording
	// indicates which recording is playing
	// show book title
});
