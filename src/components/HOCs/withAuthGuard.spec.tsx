import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import React from 'react';

import withAuthGuard from '@components/HOCs/withAuthGuard';
import {
	GetWithAuthGuardDataDocument,
	RegisterSocialDocument,
} from '@lib/generated/graphql';
import { mockedFetchApi, renderWithIntl } from '@lib/test/helpers';

function render() {
	const Comp = withAuthGuard(() => <>hello world</>);
	return renderWithIntl(<Comp />);
}

describe('withAuthGuard', () => {
	it('displays login if no email', async () => {
		when(mockedFetchApi)
			.calledWith(GetWithAuthGuardDataDocument, expect.anything())
			.mockResolvedValue({
				me: {
					user: {
						email: null,
					},
				},
			});

		const { getByPlaceholderText } = await render();

		expect(getByPlaceholderText('password')).toBeInTheDocument();
	});

	it('offers social login', async () => {
		const { getByText } = await render();

		expect(getByText('continue with Google')).toBeInTheDocument();
	});

	it('displays content on successful social login', async () => {
		const { getByText, queryByText } = await render();

		expect(queryByText('hello world')).not.toBeInTheDocument();

		when(mockedFetchApi)
			.calledWith(RegisterSocialDocument, expect.anything())
			.mockResolvedValue({
				loginSocial: {
					errors: [],
					authenticatedUser: {
						sessionToken: 'the_token',
					},
				},
			});

		when(mockedFetchApi)
			.calledWith(GetWithAuthGuardDataDocument, expect.anything())
			.mockResolvedValue({
				me: {
					user: {
						email: 'the_email',
					},
				},
			});

		userEvent.click(getByText('continue with Google'));

		await waitFor(() => {
			expect(getByText('hello world')).toBeInTheDocument();
		});
	});
});
