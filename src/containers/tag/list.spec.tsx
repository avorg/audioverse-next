import { when } from 'jest-when';
import React from 'react';

import {
	GetTagListPageDataDocument,
	GetTagListPathsDataDocument,
} from '@lib/generated/graphql';
import { loadRouter, mockedFetchApi, renderWithIntl } from '@lib/test/helpers';
import TagList, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/tags/page/[i]';

async function renderPage(parameters = {}) {
	const params = { language: 'en', i: '1', ...parameters };

	loadRouter({ query: params });

	const { props } = await getStaticProps({ params });

	return renderWithIntl(<TagList {...props} />);
}

function loadPageData() {
	when(mockedFetchApi)
		.calledWith(GetTagListPageDataDocument, expect.anything())
		.mockResolvedValue({
			tags: {
				nodes: [{ id: 'the_tag_id', name: 'the_tag_name' }],
			},
		});
}

describe('tag list page', () => {
	it('lists tag names', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_tag_name')).toBeInTheDocument();
	});

	it('generates static paths', async () => {
		when(mockedFetchApi)
			.calledWith(GetTagListPathsDataDocument, expect.anything())
			.mockResolvedValue({
				tags: {
					aggregate: {
						count: 1,
					},
				},
			});

		const result = await getStaticPaths();

		expect(result.paths).toContain('/en/tags/page/1');
	});

	it('links entries', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		const link = getByText('the_tag_name') as HTMLLinkElement;

		expect(link.href).toContain('/en/tags/the_tag_name/page/1');
	});

	it('includes pagination', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('1')).toBeInTheDocument();
	});

	it('links pagination', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		const link = getByText('1') as HTMLLinkElement;

		expect(link.href).toContain('/en/tags/page/1');
	});

	it('includes tags title', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('Tags')).toBeInTheDocument();
	});
});
