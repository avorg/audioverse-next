import { when } from 'jest-when';
import React from 'react';

import { ENTRIES_PER_PAGE } from '@lib/constants';
import {
	GetTestimoniesPageDataDocument,
	GetTestimoniesPathsDataDocument,
	Testimony,
} from '@lib/generated/graphql';
import { mockedFetchApi, renderWithIntl } from '@lib/test/helpers';
import Testimonies, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/testimonies/page/[i]';

function loadTestimonies(nodes: Partial<Testimony>[] | null = null): void {
	when(mockedFetchApi)
		.calledWith(GetTestimoniesPageDataDocument, expect.anything())
		.mockResolvedValue({
			testimonies: {
				nodes: (nodes as Testimony[]) || [
					{
						author: 'the_testimony_author',
						body: 'the_testimony_body',
						writtenDate: 'the_testimony_date',
					},
				],
				aggregate: {
					count: 1,
				},
			},
		});
}

function setEntityCount(count: number) {
	when(mockedFetchApi)
		.calledWith(GetTestimoniesPathsDataDocument, expect.anything())
		.mockResolvedValue({
			testimonies: {
				aggregate: {
					count,
				},
			},
		});
}

async function renderPage() {
	const params = { i: '1', language: 'en' };
	const { props } = await getStaticProps({ params });

	return renderWithIntl(<Testimonies {...props} />);
}

describe('testimonies pages', () => {
	it('renders', async () => {
		loadTestimonies();

		await renderPage();
	});

	it('revalidates', async () => {
		loadTestimonies();

		const { revalidate } = await getStaticProps({
			params: { i: '1', language: 'en' },
		});

		expect(revalidate).toBe(10);
	});

	it('gets testimony count', async () => {
		setEntityCount(0);

		await getStaticPaths();

		expect(mockedFetchApi).toBeCalledWith(GetTestimoniesPathsDataDocument, {
			variables: { language: 'ENGLISH' },
		});
	});

	it('generates static paths', async () => {
		setEntityCount(1);

		const result = await getStaticPaths();

		expect(result.paths).toContain('/en/testimonies/page/1');
	});

	it('sets path fallback strategy', async () => {
		setEntityCount(1);

		const result = await getStaticPaths();

		expect(result.fallback).toBe(true);
	});

	it('gets page of testimonies', async () => {
		loadTestimonies();

		await getStaticProps({ params: { language: 'en', i: '1' } });

		expect(mockedFetchApi).toBeCalledWith(GetTestimoniesPageDataDocument, {
			variables: {
				language: 'ENGLISH',
				offset: 0,
				first: ENTRIES_PER_PAGE,
			},
		});
	});

	it('lists testimonies', async () => {
		loadTestimonies();

		const { getByText } = await renderPage();

		expect(getByText('the_testimony_body')).toBeInTheDocument();
	});

	it('paginates', async () => {
		loadTestimonies();

		const { getByText } = await renderPage();

		expect(getByText('1')).toBeInTheDocument();
	});

	it('links pagination properly', async () => {
		loadTestimonies();

		const { getByText } = await renderPage(),
			link = getByText('1') as HTMLAnchorElement;

		expect(link.href).toContain('/en/testimonies/page/1');
	});

	it('renders testimony html', async () => {
		loadTestimonies([
			{
				body: '<p>text</p>',
				author: '',
				writtenDate: '',
			},
		]);

		const { getByText } = await renderPage();

		expect(() => getByText('<p>text</p>')).toThrow();
	});

	it('includes names', async () => {
		loadTestimonies();

		const { getByText } = await renderPage();

		expect(getByText('the_testimony_author')).toBeInTheDocument();
	});

	it('renders without testimonies', async () => {
		await renderPage();
	});

	it('does not error if no nodes', async () => {
		const _p = {
			nodes: undefined,
			pagination: {
				current: 1,
				total: 1,
			},
		} as any;
		await renderWithIntl(<Testimonies {..._p} />);
	});

	it('does not error if no pagination', async () => {
		const _p = {
			nodes: undefined,
			pagination: undefined,
		} as any;
		await renderWithIntl(<Testimonies {..._p} />);
	});
});
