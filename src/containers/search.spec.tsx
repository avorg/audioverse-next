import React from 'react';

import { loadQuery, renderWithIntl } from '@lib/test/helpers';
import Search, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/search';
const renderPage = async () => {
	return renderWithIntl(<Search sermons={[]} />);
};

describe('search', () => {
	it('renders', async () => {
		loadQuery();

		await renderPage();
	});

	it('registers search paths', async () => {
		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en/search');
	});

	it('includes props', async () => {
		const { props } = await getStaticProps();

		expect(props).toBeDefined();
	});

	it('displays search term', async () => {
		loadQuery({ q: 'search_term' });

		const { getByRole } = await renderPage();

		expect(getByRole('heading', { name: /search_term/i })).toBeInTheDocument();
	});
});
