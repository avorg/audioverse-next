import Testimonies from '@components/organisms/testimonies';
import { loadQuery, renderWithIntl } from '@lib/test/helpers';

const renderTestimonies = async () => {
	return renderWithIntl(Testimonies, {});
};

describe('testimonies', () => {
	it('has title', async () => {
		const { getByText } = await renderTestimonies();

		expect(getByText('Testimonies')).toBeInTheDocument();
	});

	it('translates title', async () => {
		loadQuery({ language: 'es' });

		const { getByText } = await renderTestimonies();

		expect(getByText('Testimonios')).toBeInTheDocument();
	});

	it('falls back to english', async () => {
		loadQuery({ language: 'ak' });

		const { getByText } = await renderTestimonies();

		expect(getByText('Testimonies')).toBeInTheDocument();
	});
});
