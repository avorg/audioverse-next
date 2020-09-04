import { render } from '@testing-library/react';
import React from 'react';
import Home, { getStaticProps, getStaticPaths } from '../pages/[language]';

const renderHome = async (params = {}) => {
	const { props } = await getStaticProps({ params });
	return render(<Home {...props} />);
};

describe('home page', () => {
	it('can render', async () => {
		await renderHome();
	});

	it('revalidates static copy every 10s', async () => {
		const { revalidate } = await getStaticProps({ params: {} });

		expect(revalidate).toBe(10);
	});

	it('generates static paths', async () => {
		const { paths } = await getStaticPaths();

		expect(paths).toContain('/en');
	});

	it('sets proper fallback strategy', async () => {
		const { fallback } = await getStaticPaths();

		expect(fallback).toBe('unstable_blocking');
	});
});
