import { when } from 'jest-when';
import React from 'react';

import { GetBibleVersionsPageDataDocument } from '@lib/generated/graphql';
import { mockedFetchApi, renderWithIntl } from '@lib/test/helpers';
import Versions, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/bibles';

async function renderPage() {
	const { props } = await getStaticProps();
	return renderWithIntl(<Versions {...props} />);
}

function loadPageData() {
	when(mockedFetchApi)
		.calledWith(GetBibleVersionsPageDataDocument, expect.anything())
		.mockResolvedValue({
			audiobibles: {
				nodes: [
					{
						title: 'the_version_title',
						id: 'the_version_id',
					},
				],
			},
		});
}

describe('versions list', () => {
	it('renders', async () => {
		await renderPage();

		expect(mockedFetchApi).toBeCalledWith(
			GetBibleVersionsPageDataDocument,
			expect.anything()
		);
	});

	it('renders versions', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		expect(getByText('the_version_title')).toBeInTheDocument();
	});

	it('provides language paths', async () => {
		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en/bibles');
	});

	it('links entries', async () => {
		loadPageData();

		const { getByText } = await renderPage();

		const link = getByText('the_version_title') as HTMLLinkElement;

		expect(link.href).toContain('/en/bibles/the_version_id');
	});

	it('renders 404', async () => {
		const { getByText } = await renderPage();

		expect(getByText('404')).toBeInTheDocument();
	});
});
