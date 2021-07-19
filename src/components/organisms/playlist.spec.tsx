import { render } from '@testing-library/react';
import React from 'react';

import Playlist from '@components/organisms/playlist';
import { renderWithIntl } from '@lib/test/helpers';

const renderProp = jest.fn();

async function renderComponent(props = {}) {
	const _p = {
		recordings: [
			{ id: 'first', title: 'first' },
			{ id: 'second', title: 'second' },
		] as any,
		children: renderProp,
		...props,
	};
	return renderWithIntl(<Playlist {..._p} />);
}

describe('playlist component', () => {
	it('renders playlist heading', async () => {
		const { getByText } = await renderComponent();

		expect(getByText('Playlist')).toBeInTheDocument();
	});

	it('supports initial prop', async () => {
		await renderComponent({ initial: 'second' });

		expect(renderProp).toBeCalledWith({ id: 'second', title: 'second' });
	});

	it('defaults to first recording if invalid initial provided', async () => {
		await renderComponent({ initial: 'invalid' });

		expect(renderProp).toBeCalledWith({ id: 'first', title: 'first' });
	});

	it('supports lazy loading recordings', async () => {
		const { rerender } = await render(
			<Playlist recordings={[] as any}>{renderProp}</Playlist>
		);

		rerender(
			<Playlist recordings={[{ id: 'first', title: 'first' }] as any}>
				{renderProp}
			</Playlist>
		);

		expect(renderProp).toBeCalledWith({ id: 'first', title: 'first' });
	});
});
