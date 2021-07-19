import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import withFailStates from '@components/HOCs/withFailStates';
import Pagination from '@components/molecules/pagination';
import { makePersonRoute, makePresenterListRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';
import { PresentersStaticProps } from '@pages/[language]/presenters/page/[i]';

type Props = PresentersStaticProps['props'];

function Presenters({ nodes, pagination }: Props): JSX.Element {
	const languageRoute = useLanguageRoute();
	// TODO: Use PaginatedList component
	return (
		<>
			<h1>
				<FormattedMessage
					id="presenterListPage__title"
					defaultMessage="Presenters"
					description="Presenter list page main title"
				/>
			</h1>
			<ul>
				{nodes.map((n) => (
					<li key={n.id}>
						<Link href={makePersonRoute(languageRoute, n.id)}>
							<a>
								<Image
									src={n.imageWithFallback?.url}
									alt={n.name}
									width={100}
									height={100}
								/>
								<span>{n.name}</span>
								<span>{n.summary}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
			<Pagination makeRoute={makePresenterListRoute} {...pagination} />
		</>
	);
}

export default withFailStates(Presenters, ({ nodes }) => !nodes?.length);
