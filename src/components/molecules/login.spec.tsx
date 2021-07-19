import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import React from 'react';

import Login from '@components/molecules/login';
import { LoginForgotPasswordDocument } from '@lib/generated/graphql';
import {
	mockedFetchApi,
	renderWithIntl,
	withMutedReactQueryLogger,
} from '@lib/test/helpers';

function loadForgotPasswordResponse({
	success = true,
	errors = [],
}: { success?: boolean; errors?: { message: string }[] } = {}) {
	when(mockedFetchApi)
		.calledWith(LoginForgotPasswordDocument, expect.anything())
		.mockResolvedValue({
			userRecover: {
				success,
				errors,
			},
		});
}

describe('login form', () => {
	it('renders forgot password link', async () => {
		const { getByText } = await renderWithIntl(<Login />);

		expect(getByText('forgot password'));
	});

	it('triggers forgot password email', async () => {
		loadForgotPasswordResponse();

		const { getByText, getByPlaceholderText } = await renderWithIntl(<Login />);

		userEvent.type(getByPlaceholderText('email'), 'the_email');
		userEvent.click(getByText('forgot password'));

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(LoginForgotPasswordDocument, {
				variables: {
					email: 'the_email',
				},
			});
		});
	});

	it('shows forgot password success message', async () => {
		loadForgotPasswordResponse();

		const { getByText, getByPlaceholderText } = await renderWithIntl(<Login />);

		userEvent.type(getByPlaceholderText('email'), 'the_email');
		userEvent.click(getByText('forgot password'));

		await waitFor(() => {
			expect(getByText('Check your email for a password reset link'));
		});
	});

	it('shows API error', async () => {
		loadForgotPasswordResponse({
			success: false,
			errors: [{ message: 'the_error' }],
		});

		const { getByText, getByPlaceholderText } = await renderWithIntl(<Login />);

		userEvent.type(getByPlaceholderText('email'), 'the_email');
		userEvent.click(getByText('forgot password'));

		await waitFor(() => {
			expect(getByText('the_error'));
		});
	});

	it('does not show success message if not success', async () => {
		loadForgotPasswordResponse({
			success: false,
			errors: [{ message: 'the_error' }],
		});

		const {
			getByText,
			getByPlaceholderText,
			queryByText,
		} = await renderWithIntl(<Login />);

		userEvent.type(getByPlaceholderText('email'), 'the_email');
		userEvent.click(getByText('forgot password'));

		await waitFor(() => {
			expect(getByText('the_error'));
		});

		expect(
			queryByText('Check your email for a password reset link')
		).not.toBeInTheDocument();
	});

	it('displays generic error on fetch error', async () => {
		await withMutedReactQueryLogger(async () => {
			when(mockedFetchApi)
				.calledWith(LoginForgotPasswordDocument, expect.anything())
				.mockRejectedValue('oops');

			const { getByText, getByPlaceholderText } = await renderWithIntl(
				<Login />
			);

			userEvent.type(getByPlaceholderText('email'), 'the_email');
			userEvent.click(getByText('forgot password'));

			await waitFor(() => {
				expect(
					getByText(
						'Something went wrong while trying to send a password reset link'
					)
				);
			});
		});
	});

	it('displays multiple errors', async () => {
		loadForgotPasswordResponse({
			success: false,
			errors: [{ message: 'error_one' }, { message: 'error_two' }],
		});

		const { getByText, getByPlaceholderText } = await renderWithIntl(<Login />);

		userEvent.type(getByPlaceholderText('email'), 'the_email');
		userEvent.click(getByText('forgot password'));

		await waitFor(() => {
			expect(getByText('error_two'));
		});
	});
});
