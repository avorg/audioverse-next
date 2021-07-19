import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { when } from 'jest-when';
import React from 'react';

import SocialLogin from '@components/molecules/socialLogin';
import { RegisterSocialDocument } from '@lib/generated/graphql';
import { mockedFetchApi, renderWithIntl } from '@lib/test/helpers';
describe('social login', () => {
	it('does not run onSuccess callback if errors', async () => {
		when(mockedFetchApi)
			.calledWith(RegisterSocialDocument, expect.anything())
			.mockResolvedValue({
				loginSocial: {
					errors: [
						{
							message: 'the_error_message',
						},
					],
				},
			});

		let didCallbackRun = false;

		const { getByText } = await renderWithIntl(
			<SocialLogin onSuccess={() => (didCallbackRun = true)} />
		);

		userEvent.click(getByText('continue with Facebook'));

		await waitFor(() => expect(mockedFetchApi).toBeCalled());

		expect(didCallbackRun).toBeFalsy();
	});
});
