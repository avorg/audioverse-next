import CardSermon from '@components/molecules/cardSermon';
import { buildRenderer } from '@lib/test/helpers';

const renderComponent = buildRenderer(CardSermon);

describe('card sermon', () => {
	it('links title', async () => {
		const { getByText } = await renderComponent({
			props: {
				recording: {
					id: 'the_id',
					title: 'the_title',
				},
			},
		});

		expect(getByText('the_title')).toHaveAttribute(
			'href',
			'/en/sermons/the_id'
		);
	});
});
