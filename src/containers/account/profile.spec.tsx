import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import _ from 'lodash';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { QueryClient } from 'react-query';
import { hydrate } from 'react-query/hydration';

import * as api from '@lib/api';
import { login } from '@lib/api';
import { storeRequest } from '@lib/api/fetchApi';
import {
	GetProfileDataDocument,
	UpdateProfileDataDocument,
} from '@lib/generated/graphql';
import {
	buildServerRenderer,
	loadAuthGuardData,
	mockedFetchApi,
	renderWithIntl,
} from '@lib/test/helpers';
import Profile, { getServerSideProps } from '@pages/[language]/account/profile';

import resetAllMocks = jest.resetAllMocks;
jest.mock('@lib/api/login');

const renderPage = buildServerRenderer(Profile, getServerSideProps);

const userBefore = {
	givenName: 'the_given_name',
	surname: 'the_surname',
	email: 'the_email',
	address1: 'the_address_1',
	address2: 'the_address_2',
	city: 'the_city',
	province: 'the_province',
	postalCode: 'the_postal_code',
	country: 'the_country',
};

const userAfter = {
	givenName: 'the_new_given_name',
	surname: 'the_new_surname',
	email: 'the_new_email',
	address1: 'the_new_address_1',
	address2: 'the_new_address_2',
	city: 'the_new_city',
	province: 'the_new_province',
	postalCode: 'the_new_postal_code',
	country: 'the_new_country',
};

function loadData() {
	loadAuthGuardData();

	when(mockedFetchApi)
		.calledWith(GetProfileDataDocument, expect.anything())
		.mockResolvedValue({
			me: {
				user: userBefore,
			},
		});

	when(mockedFetchApi)
		.calledWith(UpdateProfileDataDocument, expect.anything())
		.mockResolvedValue({
			updateMyProfile: {
				authenticatedUser: {
					user: userAfter,
				},
			},
		});
}

describe('profile page', () => {
	beforeEach(() => resetAllMocks());

	it('dehydrates user', async () => {
		mockedFetchApi.mockResolvedValue({
			me: {
				user: {
					givenName: 'the_name',
				},
			},
		});

		const { props } = (await getServerSideProps({
			req: {} as any,
		} as GetServerSidePropsContext)) as any;

		const queryClient = new QueryClient();

		hydrate(queryClient, props.dehydratedState);

		const data = queryClient.getQueryData('getProfileData');

		expect(_.get(data, 'me.user.givenName')).toEqual('the_name');
	});

	it('includes first name', async () => {
		mockedFetchApi.mockResolvedValue({
			me: {
				user: {
					givenName: 'first',
					email: 'the_email',
				},
			},
		});

		const { getByDisplayValue } = await renderPage();

		await waitFor(() => expect(getByDisplayValue('first')).toBeInTheDocument());
	});

	it('displays email field if unauthenticated', async () => {
		const { getByPlaceholderText } = await renderPage();

		expect(getByPlaceholderText('email')).toBeInTheDocument();
	});

	it('displays password field if unauthenticated', async () => {
		const { getByPlaceholderText } = await renderPage();

		expect(getByPlaceholderText('password')).toBeInTheDocument();
	});

	it('makes login request', async () => {
		jest.spyOn(api, 'login');

		const { getByPlaceholderText, getByText } = await renderPage();

		const emailField = getByPlaceholderText('email');
		const passwordField = getByPlaceholderText('password');
		const loginButton = getByText('login');

		await userEvent.type(emailField, 'the_email');
		await userEvent.type(passwordField, 'the_password');
		loginButton.click();

		expect(api.login).toHaveBeenCalledWith('the_email', 'the_password');
	});

	it('stores request', async () => {
		await getServerSideProps({
			req: 'the_request' as any,
		} as GetServerSidePropsContext);

		expect(storeRequest).toBeCalledWith('the_request');
	});

	it('catches login errors', async () => {
		jest.spyOn(api, 'login').mockImplementation(() => {
			throw new Error();
		});

		const { getByText } = await renderPage();

		const loginButton = getByText('login');

		loginButton.click();

		expect(getByText('Login failed')).toBeInTheDocument();
	});

	it('prevents default form submission', async () => {
		const { getByTestId } = await renderPage();

		const event = {
			preventDefault: jest.fn(),
		};

		ReactTestUtils.Simulate.submit(getByTestId('loginForm'), event);

		await waitFor(() => expect(event.preventDefault).toHaveBeenCalled());
	});

	it('invalidates cache on successful login', async () => {
		mockedFetchApi.mockResolvedValue({
			me: {
				user: {
					givenName: 'first',
					email: 'the_email',
				},
			},
		});

		jest.spyOn(api, 'login').mockResolvedValue(true);

		const { getByText, getByDisplayValue } = await renderPage();

		userEvent.click(getByText('login'));

		await waitFor(() => expect(getByDisplayValue('first')).toBeInTheDocument());
	});

	it('logs in with email and password', async () => {
		const { getByText, getByPlaceholderText } = await renderPage();

		await userEvent.type(getByPlaceholderText('email'), 'the_email');
		await userEvent.type(getByPlaceholderText('password'), 'the_password');

		userEvent.click(getByText('login'));

		expect(login).toBeCalledWith('the_email', 'the_password');
	});

	it('does not fetch profile data if not logged in', async () => {
		await renderWithIntl(<Profile />);

		expect(mockedFetchApi).not.toBeCalledWith(
			GetProfileDataDocument,
			expect.anything()
		);
	});

	it('renders email field', async () => {
		loadData();

		const { getByLabelText } = await renderPage();

		expect(getByLabelText('email')).toBeInTheDocument();
	});

	it('loads user email', async () => {
		loadData();

		const { getByDisplayValue } = await renderPage();

		await waitFor(() => {
			expect(getByDisplayValue('the_email')).toBeInTheDocument();
		});
	});

	it('renders password field', async () => {
		loadData();

		const { getByLabelText } = await renderPage();

		expect(getByLabelText('password')).toBeInTheDocument();
	});

	it('renders password confirm field', async () => {
		loadData();

		const { getByLabelText } = await renderPage();

		expect(getByLabelText('confirm password')).toBeInTheDocument();
	});

	it('submits email change', async () => {
		loadData();

		const { getByLabelText, getByText, getByDisplayValue } = await renderPage();

		await waitFor(() => {
			expect(getByDisplayValue('the_email')).toBeInTheDocument();
		});

		userEvent.type(getByLabelText('email'), '123');
		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(UpdateProfileDataDocument, {
				variables: {
					...userBefore,
					email: 'the_email123',
					password: null,
				},
			});
		});
	});

	it('requires password field two', async () => {
		loadData();

		const { getByLabelText, getByText } = await renderPage();

		userEvent.type(getByLabelText('password'), 'the_password');
		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(
				getByText('please type your new password twice')
			).toBeInTheDocument();
		});
	});

	it('requires password field one', async () => {
		loadData();

		const { getByLabelText, getByText } = await renderPage();

		userEvent.type(getByLabelText('confirm password'), 'the_password');
		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(
				getByText('please type your new password twice')
			).toBeInTheDocument();
		});
	});

	it('does not submit mismatched password', async () => {
		loadData();

		const { getByLabelText, getByText } = await renderPage();

		userEvent.type(getByLabelText('password'), 'pass_one');
		userEvent.type(getByLabelText('confirm password'), 'pass_two');
		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(getByText('passwords do not match')).toBeInTheDocument();
		});

		expect(mockedFetchApi).not.toBeCalledWith(
			UpdateProfileDataDocument,
			expect.anything()
		);
	});

	it('submits matching password', async () => {
		loadData();

		const { getByLabelText, getByText, getByDisplayValue } = await renderPage();

		await waitFor(() => {
			expect(getByDisplayValue('the_email')).toBeInTheDocument();
		});

		userEvent.type(getByLabelText('password'), 'the_password');
		userEvent.type(getByLabelText('confirm password'), 'the_password');
		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(UpdateProfileDataDocument, {
				variables: {
					...userBefore,
					password: 'the_password',
				},
			});
		});
	});

	it('loads mutated email on success', async () => {
		loadData();

		when(mockedFetchApi)
			.calledWith(UpdateProfileDataDocument, expect.anything())
			.mockResolvedValue({
				updateMyProfile: {
					authenticatedUser: {
						user: {
							givenName: 'the_new_given_name',
							surname: 'the_new_surname',
							email: 'the_new_email',
						},
					},
				},
			});

		const { getByText, getByDisplayValue } = await renderPage();

		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(getByDisplayValue('the_new_email')).toBeInTheDocument();
		});
	});

	it('loads mutated name on success', async () => {
		loadData();

		const { getByText, getByDisplayValue } = await renderPage();

		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(getByDisplayValue('the_new_given_name')).toBeInTheDocument();
		});
	});

	it('sets email input type to email', async () => {
		loadData();

		const { getByDisplayValue } = await renderPage();

		await waitFor(() => {
			expect(getByDisplayValue('the_email')).toHaveAttribute('type', 'email');
		});
	});

	it('renders surname', async () => {
		loadData();

		const { getByDisplayValue } = await renderPage();

		await waitFor(() => {
			expect(getByDisplayValue('the_surname')).toBeInTheDocument();
		});
	});

	it('all initial user data', async () => {
		loadData();

		const { getByDisplayValue } = await renderPage();

		await waitFor(() => {
			Object.values(userBefore).map((v) => {
				expect(getByDisplayValue(v)).toBeInTheDocument();
			});
		});
	});

	it('saves all form data', async () => {
		loadData();

		const { getByText, getByDisplayValue } = await renderPage();

		await waitFor(() => {
			expect(getByDisplayValue('the_email')).toBeInTheDocument();
		});

		userEvent.click(getByText('save'));

		await waitFor(() => {
			expect(mockedFetchApi).toBeCalledWith(UpdateProfileDataDocument, {
				variables: {
					password: null,
					...userBefore,
				},
			});
		});
	});
});
