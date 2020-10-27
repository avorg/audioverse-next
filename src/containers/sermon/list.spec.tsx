import { render, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';

import { getSermonCount, getSermons } from '@lib/api';
import { ENTRIES_PER_PAGE, LANGUAGES } from '@lib/constants';
import SermonList, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/sermons/[filter]/page/[i]';

jest.mock('@lib/api');
jest.mock('next/router');

function loadQuery(query = {}) {
	(useRouter as jest.Mock).mockReturnValue({ query });
}

const renderPage = async ({
	params = { i: '1', language: 'en', filter: 'all' },
	query = {},
} = {}) => {
	loadQuery(query);
	const { props } = await getStaticProps({ params });
	return render(<SermonList {...props} />);
};

function setSermonCount(count: number) {
	(getSermonCount as jest.Mock).mockReturnValue(Promise.resolve(count));
}

function loadSermons({
	nodes = undefined,
	count = undefined,
}: { nodes?: any[]; count?: number } = {}) {
	(getSermons as jest.Mock).mockReturnValue(
		Promise.resolve({
			nodes: nodes || [
				{
					id: 1,
					title: 'the_sermon_title',
				},
			],
			aggregate: {
				count: count || 1,
			},
		})
	);
}

function loadGetSermonsError() {
	(getSermons as jest.Mock).mockReturnValue(Promise.reject('API failure'));
}

describe('sermons list page', () => {
	beforeEach(() => jest.resetAllMocks());

	it('can be rendered', async () => {
		loadSermons();

		await renderPage();
	});

	it('generates static paths', async () => {
		setSermonCount(1);

		const result = await getStaticPaths();

		expect(result.paths).toContain('/en/sermons/all/page/1');
	});

	it('generates in all languages', async () => {
		setSermonCount(1);

		const result = await getStaticPaths();

		expect(result.paths).toContain('/es/sermons/all/page/1');
	});

	it('sets proper fallback strategy', async () => {
		setSermonCount(1);

		const { fallback } = await getStaticPaths();

		expect(fallback).toBe('unstable_blocking');
	});

	it('generates all pages in language', async () => {
		setSermonCount(100 * ENTRIES_PER_PAGE);

		const result = await getStaticPaths();

		const expected = 100 * Object.keys(LANGUAGES).length * 3;
		expect(result.paths.length).toBe(expected);
	});

	it('uses language codes to get sermon counts', async () => {
		setSermonCount(1);

		await getStaticPaths();

		expect(getSermonCount).toBeCalledWith('ENGLISH', { hasVideo: null });
	});

	it('gets sermons for list page', async () => {
		loadSermons();

		await getStaticProps({ params: { i: '2', language: 'en' } });

		await waitFor(() =>
			expect(getSermons).toBeCalledWith('ENGLISH', {
				offset: ENTRIES_PER_PAGE,
				first: ENTRIES_PER_PAGE,
			})
		);
	});

	it('displays sermons list', async () => {
		loadSermons();

		const { getByText } = await renderPage();

		expect(getByText('the_sermon_title')).toBeDefined();
	});

	it('renders 404 on api error', async () => {
		(useRouter as jest.Mock).mockReturnValue({ isFallback: false });
		loadGetSermonsError();

		const { getByText } = await renderPage();

		expect(getByText('404')).toBeDefined();
	});

	it('returns 404 on empty data', async () => {
		(useRouter as jest.Mock).mockReturnValue({ isFallback: false });
		loadSermons({ nodes: [] });

		const { getByText } = await renderPage();

		expect(getByText('404')).toBeDefined();
	});

	it('includes pagination', async () => {
		loadSermons();

		const { getByText } = await renderPage();

		expect(getByText('1')).toBeDefined();
	});

	it('links to last pagination page', async () => {
		loadSermons({ count: 75 });

		const { getByText } = await renderPage();

		expect(getByText('3')).toBeDefined();
	});

	it('calculates pages using items per page', async () => {
		loadSermons({ count: 75 });

		const { getByText } = await renderPage({
			params: { i: '3', language: 'en' },
		});

		expect(() => getByText('4')).toThrow();
	});

	it('handles string page index', async () => {
		loadSermons();

		await renderPage({ params: { i: '3', language: 'en' } });
	});

	it('links pagination properly', async () => {
		loadSermons();

		const { getByText } = await renderPage(),
			link = getByText('1') as HTMLAnchorElement;

		expect(link.href).toContain('/en/sermons/page/1');
	});

	it('gets sermons for list page', async () => {
		loadSermons();

		await getStaticProps({ params: { i: '2', language: 'en' } });

		await waitFor(() =>
			expect(getSermons).toBeCalledWith('ENGLISH', {
				offset: ENTRIES_PER_PAGE,
				first: ENTRIES_PER_PAGE,
			})
		);
	});

	it('revalidates static pages', async () => {
		loadSermons();

		const props = await getStaticProps({ params: { i: '2', language: 'en' } });

		expect(props.revalidate).toBe(10);
	});

	it('links All button', async () => {
		loadSermons();

		const { getByRole } = await renderPage();

		expect(getByRole('link', { name: 'All' })).toHaveAttribute(
			'href',
			'/en/sermons/all/page/1'
		);
	});

	it('links All button using lang', async () => {
		loadSermons();

		const { getByRole } = await renderPage({ query: { language: 'es' } });

		expect(getByRole('link', { name: 'All' })).toHaveAttribute(
			'href',
			'/es/sermons/all/page/1'
		);
	});

	it('links Video button', async () => {
		loadSermons();

		const { getByRole } = await renderPage();

		expect(getByRole('link', { name: 'Video' })).toHaveAttribute(
			'href',
			'/en/sermons/video/page/1'
		);
	});

	it('links Audio button', async () => {
		loadSermons();

		const { getByRole } = await renderPage();

		expect(getByRole('link', { name: 'Audio' })).toHaveAttribute(
			'href',
			'/en/sermons/audio/page/1'
		);
	});

	it('generates filtered pages', async () => {
		setSermonCount(1);

		const result = await getStaticPaths();

		expect(result.paths).toContain('/es/sermons/video/page/1');
	});

	it('gets video count', async () => {
		await getStaticPaths();

		expect(getSermonCount).toBeCalledWith('ENGLISH', { hasVideo: true });
	});

	it('gets audio count', async () => {
		await getStaticPaths();

		expect(getSermonCount).toBeCalledWith('ENGLISH', { hasVideo: false });
	});

	it('gets video filtered sermons', async () => {
		loadSermons();

		await renderPage({
			params: {
				i: '1',
				filter: 'video',
				language: 'en',
			},
		});

		expect(getSermons).toBeCalledWith('ENGLISH', {
			hasVideo: true,
			first: 25,
			offset: 0,
		});
	});

	it('gets audio filtered sermons', async () => {
		loadSermons();

		await renderPage({
			params: {
				i: '1',
				filter: 'audio',
				language: 'en',
			},
		});

		expect(getSermons).toBeCalledWith('ENGLISH', {
			hasVideo: false,
			first: 25,
			offset: 0,
		});
	});
});
