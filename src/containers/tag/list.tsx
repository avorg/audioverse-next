import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Pagination from '@components/molecules/pagination';
import { GetTagListPageDataQuery } from '@lib/generated/graphql';
import { makeTagDetailRoute, makeTagListRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

type Tags = NonNullable<GetTagListPageDataQuery['tags']['nodes']>;

export interface TagListProps {
	nodes: Tags;
	pagination: {
		current: number;
		total: number;
	};
}

function TagList({ pagination, nodes }: TagListProps): JSX.Element {
	const languageRoute = useLanguageRoute();
	// TODO: Use PaginatedList component
	return (
		<>
			<h1>
				<FormattedMessage
					id="tagListPage__title"
					defaultMessage="Tags"
					description="Tag list page title"
				/>
			</h1>
			<ul>
				{nodes &&
					nodes.map((t) => (
						<li key={t.id}>
							<Link href={makeTagDetailRoute(languageRoute, t.name)}>
								<a>{t.name}</a>
							</Link>
						</li>
					))}
			</ul>
			<Pagination {...pagination} makeRoute={makeTagListRoute} />
		</>
	);
}

export default TagList;
