import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import React from 'react';
import videojs from 'video.js';

import AndMiniplayer from '@components/templates/andMiniplayer';
import { BookProps } from '@containers/bible/book';
import {
	GetBibleBookDetailPageDataDocument,
	GetBibleBookDetailPathsDataDocument,
} from '@lib/generated/graphql';
import { buildStaticRenderer, mockedFetchApi } from '@lib/test/helpers';
import Book, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/bibles/[id]/[book]';

jest.mock('video.js');

const renderPage = buildStaticRenderer(
	(props: BookProps) => {
		return (
			<AndMiniplayer>
				<Book {...props} />
			</AndMiniplayer>
		);
	},
	getStaticProps,
	{
		id: 'the_version_id',
		book: 'the_book_shortname',
	}
);

function loadPageData() {
	when(mockedFetchApi)
		.calledWith(GetBibleBookDetailPageDataDocument, expect.anything())
		.mockResolvedValue({
			audiobible: {
				title: 'the_version_title',
				book: {
					title: 'the_book_title',
					shareUrl: 'the_book_share_url',
					chapters: [
						{
							id: 'the_chapter_id',
							title: 'the_chapter_title',
							url: 'the_chapter_url',
							verses: [
								{
									number: 1,
									text: 'the_verse_text',
								},
							],
						},
						{
							id: 'second_chapter_id',
							title: 'second_chapter_title',
							url: 'second_chapter_url',
						},
					],
				},
				sponsor: {
					name: 'the_sponsor_name',
					url: 'the_sponsor_url',
				},
				copyrightText: 'the_sponsor_copyright',
			},
		});
}

describe('Bible book detail page', () => {
	it('renders', async () => {
		await renderPage();

		expect(mockedFetchApi).toBeCalledWith(GetBibleBookDetailPageDataDocument, {
			variables: {
				versionId: 'the_version_id',
				bookId: 'the_version_id-the_book_shortname',
			},
		});
	});

	it('generates paths', async () => {
		when(mockedFetchApi)
			.calledWith(GetBibleBookDetailPathsDataDocument, expect.anything())
			.mockResolvedValue({
				audiobibles: {
					nodes: [
						{
							books: [
								{
									id: 'ENGESVC-Gen',
								},
							],
						},
					],
				},
			});

		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en/bibles/ENGESVC/Gen');
	});

	it('displays book title', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_book_title')).toBeInTheDocument();
	});

	it('displays version title', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_version_title')).toBeInTheDocument();
	});

	it('includes chapter selector', async () => {
		loadPageData();

		const { getByLabelText } = await renderPage();

		const select = getByLabelText('Chapter') as HTMLSelectElement;
		const optionLabels = Array.from(select.options).map((opt) => opt.text);

		expect(optionLabels).toContain('the_chapter_title');
	});

	it('sets option value to chapter id', async () => {
		loadPageData();

		const { getByLabelText } = await renderPage();

		const select = getByLabelText('Chapter') as HTMLSelectElement;
		const optionLabels = Array.from(select.options).map((opt) => opt.value);

		expect(optionLabels).toContain('the_chapter_id');
	});

	it('has download link', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('mp3: the_chapter_title')).toBeInTheDocument();
	});

	it('updates download link', async () => {
		loadPageData();

		const { getByLabelText, getByText } = await renderPage();

		const input = getByLabelText('Chapter');

		userEvent.selectOptions(input, 'second_chapter_id');

		expect(getByText('mp3: second_chapter_title')).toBeInTheDocument();
	});

	it('sets download link href', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		const link = getByText('mp3: the_chapter_title') as HTMLLinkElement;

		expect(link.href).toContain('the_chapter_url');
	});

	it('displays sponsor name', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_sponsor_name')).toBeInTheDocument();
	});

	it('displays sponsor url', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_sponsor_url')).toBeInTheDocument();
	});

	it('displays copyright text', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_sponsor_copyright')).toBeInTheDocument();
	});

	it('displays verse number', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('1')).toBeInTheDocument();
	});

	it('displays verse text', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_verse_text')).toBeInTheDocument();
	});

	it('includes player', async () => {
		loadPageData();

		const { getByLabelText } = await renderPage();

		userEvent.click(getByLabelText('play'));

		expect(videojs).toBeCalled();
	});

	it('includes share url', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_book_share_url')).toBeInTheDocument();
	});
});
