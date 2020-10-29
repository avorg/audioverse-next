import { render } from '@testing-library/react';
import React from 'react';

import SermonListXml, {
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
});
