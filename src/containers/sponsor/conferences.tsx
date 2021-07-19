import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import withFailStates from '@components/HOCs/withFailStates';
import Pagination from '@components/molecules/pagination';
import TableList from '@components/organisms/tableList';
import {
	makeConferenceRoute,
	makeSponsorConferencesRoute,
	makeSponsorRoute,
} from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';
import { useQueryString } from '@lib/useQueryString';
import { SponsorConferencesStaticProps } from '@pages/[language]/sponsors/[id]/conferences/page/[i]';

type Props = SponsorConferencesStaticProps['props'];

function SponsorConferences({ nodes, data, pagination }: Props): JSX.Element {
	const id = useQueryString('id') || '';
	const languageRoute = useLanguageRoute();
	return (
		<>
			<h1>
				<Link href={makeSponsorRoute(languageRoute, id)}>
					<a>{data?.sponsor?.title}</a>
				</Link>
			</h1>
			<h2>
				<FormattedMessage
					id={'sponsorConferencesPage__title'}
					defaultMessage={'Conferences'}
					description={'Sponsor conferences page title'}
				/>
			</h2>
			<TableList
				nodes={nodes}
				makeEntryRoute={(l, n) => makeConferenceRoute(l, n.id)}
			/>
			<Pagination
				makeRoute={(l, i) => makeSponsorConferencesRoute(l, id, i)}
				{...pagination}
			/>
		</>
	);
}

export default withFailStates(
	SponsorConferences,
	({ nodes }) => !nodes?.length
);
