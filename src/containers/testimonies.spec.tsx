import { getTestimonies, getTestimonyCount } from '@lib/api';
import { ENTRIES_PER_PAGE } from '@lib/constants';
import { loadTestimonies, renderWithIntl } from '@lib/test/helpers';
import Testimonies, {
	getStaticPaths,
	getStaticProps,
} from '@pages/[language]/testimonies/page/[i]';

jest.mock('@lib/api');
jest.mock('@lib/api/fetchApi');

function setEntityCount(count: number) {
	(getTestimonyCount as jest.Mock).mockReturnValue(Promise.resolve(count));
}

async function renderPage() {
	const params = { i: '1', language: 'en' };
	const { props } = await getStaticProps({ params });

	return renderWithIntl(Testimonies, props);
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

		expect(getTestimonyCount).toBeCalledWith('ENGLISH');
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

		expect(getTestimonies).toBeCalledWith('ENGLISH', {
			offset: 0,
			first: ENTRIES_PER_PAGE,
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
		await renderWithIntl(Testimonies, {
			nodes: undefined,
			pagination: {
				current: 1,
				total: 1,
			},
		} as any);
	});

	it('does not error if no pagination', async () => {
		await renderWithIntl(Testimonies, {
			nodes: undefined,
			pagination: undefined,
		} as any);
	});
});
