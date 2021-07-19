import { fireEvent, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { toast } from 'react-toastify';

import SpeakerName from '@components/molecules/speakerName';
import * as api from '@lib/api';
import { isPersonFavorited } from '@lib/api';
import { setPersonFavorited } from '@lib/api/setPersonFavorited';
import { sleep } from '@lib/sleep';
import {
	renderWithIntl,
	resolveWithDelay,
	withMutedReactQueryLogger,
} from '@lib/test/helpers';
jest.mock('react-toastify');
jest.mock('@lib/api/setPersonFavorited');
jest.mock('@lib/api/isPersonFavorited');
jest.mock('@lib/api/fetchApi');

const renderComponent = (speaker: any | undefined = undefined) => {
	const _p = {
		person:
			speaker ||
			({
				id: 'the_id',
				name: 'the_name',
			} as any),
	};
	return renderWithIntl(<SpeakerName {..._p} />);
};

describe('speaker name component', () => {
	beforeEach(() => jest.resetAllMocks());

	it('renders', async () => {
		await renderComponent();
	});

	it('renders speaker name', async () => {
		const { getByText } = await renderComponent();

		expect(getByText('the_name')).toBeInTheDocument();
	});

	it('renders speaker summary', async () => {
		const { getByText } = await renderComponent({
			id: 'the_id',
			name: 'the_name',
			summary: 'the_summary',
		});

		expect(getByText('the_summary')).toBeInTheDocument();
	});

	it('renders speaker image', async () => {
		const { getAllByAltText } = await renderComponent({
			id: 'the_id',
			name: 'the_name',
			imageWithFallback: {
				url: 'the_url',
			},
		});

		const images = getAllByAltText('the_name') as HTMLImageElement[];

		expect(images[0]).toHaveAttribute('src', 'the_url');
	});

	it('has favorite toggle', async () => {
		const { getByText } = await renderComponent();

		expect(getByText('Favorite')).toBeInTheDocument();
	});

	it('renders summary html', async () => {
		const { getByText } = await renderComponent({
			id: 'the_id',
			name: 'the_name',
			summary: 'hello <i>target</i> hello',
		});

		expect(getByText('target')).toBeInTheDocument();
	});

	it('sets initial toggle state', async () => {
		const { getByText } = await renderComponent({
			id: 'the_id',
			name: 'the_name',
			viewerHasFavorited: true,
		});

		expect(getByText('Unfavorite')).toBeInTheDocument();
	});

	it('alerts need for login', async () => {
		const { getByText } = await renderComponent();

		userEvent.click(getByText('Favorite'));

		expect(toast).toBeCalledWith('You must be logged in to do this');
	});

	it('prevents button click default action', async () => {
		const { getByText } = await renderComponent();

		const result = fireEvent.click(getByText('Favorite'));

		expect(result).toBe(false);
	});

	it('favorites speaker', async () => {
		jest.spyOn(api, 'isPersonFavorited').mockResolvedValue(false);

		const { getByText } = await renderComponent();

		await waitFor(() => expect(isPersonFavorited).toBeCalled);

		userEvent.click(getByText('Favorite'));

		await waitFor(() =>
			expect(setPersonFavorited).toBeCalledWith('the_id', true)
		);
	});

	it('does not toast if authenticated', async () => {
		jest.spyOn(api, 'isPersonFavorited').mockResolvedValue(false);

		const { getByText } = await renderComponent();

		await waitFor(() => expect(isPersonFavorited).toBeCalled());

		userEvent.click(getByText('Favorite'));

		expect(toast).not.toBeCalled();
	});

	it('does not call api if user not authenticated', async () => {
		const { getByText } = await renderComponent();

		userEvent.click(getByText('Favorite'));

		expect(setPersonFavorited).not.toBeCalled();
	});

	it('does not toast error before initial load', async () => {
		jest.spyOn(api, 'isPersonFavorited').mockResolvedValue(false);

		const { getByText } = await renderComponent();

		userEvent.click(getByText('Favorite'));

		expect(toast).not.toBeCalled();
	});

	it('updates state optimistically', async () => {
		jest.spyOn(api, 'isPersonFavorited').mockResolvedValue(false);

		const { getByText } = await renderComponent();

		userEvent.click(getByText('Favorite'));

		await waitFor(() => expect(getByText('Unfavorite')).toBeInTheDocument());
	});

	it('does not allow initial data to override new data', async () => {
		jest.spyOn(api, 'isPersonFavorited').mockResolvedValue(false);

		const { getByText } = await renderComponent({
			id: 'the_id',
			name: 'the_name',
			viewerHasFavorited: true,
		});

		await waitFor(() => expect(getByText('Favorite')).toBeInTheDocument());
	});

	it('cancels queries to avoid clobbering optimistic updates', async () => {
		// Load slow query to clobber

		resolveWithDelay(jest.spyOn(api, 'isPersonFavorited'), 50, true);

		// Setup & initial render

		const { getByText } = await renderComponent();

		// Click button

		userEvent.click(getByText('Favorite'));

		// Wait for slow response to be requested

		await waitFor(() => expect(isPersonFavorited).toBeCalled());

		// Load second, fast response

		jest.spyOn(api, 'isPersonFavorited').mockResolvedValue(false);

		// Click button

		userEvent.click(getByText('Unfavorite'));

		// Sleep

		await sleep({ ms: 100 });

		// Check that first, slow response didn't clobber second, fast response

		expect(getByText('Favorite')).toBeInTheDocument();
	});

	it('roles back isFavorited if error on mutate', async () => {
		await withMutedReactQueryLogger(async () => {
			jest.spyOn(api, 'isPersonFavorited').mockResolvedValue(false);

			const { getByText } = await renderComponent();

			await waitFor(() => expect(isPersonFavorited).toBeCalled());

			jest.spyOn(api, 'setPersonFavorited').mockRejectedValue('Oops!');

			userEvent.click(getByText('Favorite'));

			await waitFor(() => expect(getByText('Unfavorite')).toBeInTheDocument());

			await waitFor(() => expect(getByText('Favorite')).toBeInTheDocument());
		});
	});

	it('includes website', async () => {
		const { getByText } = await renderComponent({
			id: 'the_id',
			name: 'the_name',
			website: 'the_website',
		});

		const link = getByText('the_website') as HTMLLinkElement;

		expect(link.href).toContain('the_website');
	});

	// TODO: includes rss link
});
