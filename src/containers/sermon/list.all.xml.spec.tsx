import { render } from '@testing-library/react';
import React from 'react';

import SermonListXml, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/sermons/all.xml';

describe('list rss feed', () => {
	it('generates paths', async () => {
		const result = getStaticProps();

		expect(result).toBeDefined();
	});

	it('renders', async () => {
		const { props } = await getStaticProps();
		await render(<SermonListXml {...props} />);
	});

	it('generates paths', async () => {
		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en/sermons/all.xml');
	});
});
