import { act, render } from '@testing-library/react';
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { loadRouter } from '@lib/test/helpers';
import MyApp from '@pages/_app';

jest.mock('react-topbar-progress-indicator');

const renderApp = (component: any, props: any) => {
	return render(<MyApp Component={component} pageProps={props} />);
};

describe('app', () => {
	beforeEach(() => {
		loadRouter({});
	});

	it('sets title', async () => {
		const { getByTestId } = await render(
			<MyApp
				Component={((() => null) as unknown) as typeof React.Component}
				pageProps={{}}
			/>
		);

		const head = getByTestId('head');

		expect(head.innerHTML).toContain('AudioVerse');
	});

	it('rehydrates react-query', async () => {
		await act(async () => {
			const queryClient = new QueryClient();

			await queryClient.prefetchQuery('myQuery', async () => 'myResult');

			const spy = jest.fn();

			const { getByText } = await renderApp(
				() => {
					const { data: myQuery } = useQuery('myQuery', spy);
					return <>{myQuery}</>;
				},
				{
					dehydratedState: dehydrate(queryClient),
				}
			);

			expect(getByText('myResult')).toBeInTheDocument();
		});
	});

	it('includes sidebar', async () => {
		const { getByText } = await renderApp(() => <>h</>, {});

		expect(getByText('Discover')).toBeInTheDocument();
	});

	it('disables sidebar', async () => {
		const { queryByText } = await renderApp(() => <>h</>, {
			disableSidebar: true,
		});

		expect(queryByText('Discover')).not.toBeInTheDocument();
	});

	it('sets title with props', async () => {
		const { getByTestId } = await renderApp(() => <>h</>, {
			title: 'the_prop_title',
		});

		const head = getByTestId('head');

		expect(head.innerHTML).toContain('the_prop_title | AudioVerse');
	});
});
