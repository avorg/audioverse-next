import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import withFailStates from '@components/HOCs/withFailStates';
import Pagination from '@components/molecules/pagination';
import { makeConferenceListRoute, makeConferenceRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';
import { ConferenceListStaticProps } from '@pages/[language]/conferences/page/[i]';

type Props = ConferenceListStaticProps['props'];

function ConferenceList({ nodes, pagination }: Props): JSX.Element {
	const languageRoute = useLanguageRoute();

	// TODO: Use PaginatedList component
	return (
		<>
			<h1>
				<FormattedMessage
					id="conferenceListPage__title"
					defaultMessage="Conferences"
					description="Conference list page main title"
				/>
			</h1>
			<ul>
				{nodes.map((n) => (
					<li key={n.id}>
						<Link href={makeConferenceRoute(languageRoute, n.id, 1)}>
							<a>
								<Image
									src={n.imageWithFallback?.url}
									alt={n.title}
									width={100}
									height={100}
								/>
								<span>{n.title}</span>
								<span>{n.sponsor?.title}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>

			<Pagination makeRoute={makeConferenceListRoute} {...pagination} />
		</>
	);
}

export default withFailStates(ConferenceList, ({ nodes }) => !nodes?.length);
