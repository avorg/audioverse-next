import React from 'react';

import CardPlayable, {
	CardPlayableProps,
} from '@components/molecules/cardPlayable';
import AndMiniplayer from '@components/templates/andMiniplayer';
import { buildRenderer } from '@lib/test/helpers';

const Page = (props: CardPlayableProps): JSX.Element => {
	return (
		<AndMiniplayer>
			<CardPlayable {...props} />
		</AndMiniplayer>
	);
};

const renderComponent = buildRenderer(Page, {
	defaultProps: {
		recording: {
			id: 'the_sermon_id',
		},
		progress: 0.3,
	},
});

describe('card playable', () => {
	it('has play button', async () => {
		const { getByLabelText } = await renderComponent();

		expect(getByLabelText('play')).toBeInTheDocument();
	});

	it('disables progress bar interactivity', async () => {
		const { getByLabelText } = await renderComponent();

		expect(getByLabelText('progress')).toBeDisabled();
	});
});
