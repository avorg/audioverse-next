import Link from 'next/link';
import React from 'react';

import withFailStates from '@components/HOCs/withFailStates';
import Pagination from '@components/molecules/pagination';
import RecordingList from '@components/molecules/recordingList';
import RssLink from '@components/molecules/rssLink';
import { makeConferenceRoute, makeSponsorRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';
import { ConferenceStaticProps } from '@pages/[language]/conferences/[id]/page/[i]';

type Props = ConferenceStaticProps['props'];

function ConferenceDetail({
	nodes,
	data,
	pagination,
	rssPath,
}: Props): JSX.Element {
	const languageRoute = useLanguageRoute();
	const sponsorId = data?.conference?.sponsor?.id;

	return (
		<>
			<h1>{data?.conference?.title}</h1>
			<p>
				{data?.conference?.startDate} — {data?.conference?.endDate}
			</p>
			{sponsorId && (
				<Link href={makeSponsorRoute(languageRoute, sponsorId)}>
					<a>{data?.conference?.sponsor?.title}</a>
				</Link>
			)}
			<RssLink href={rssPath} />
			<RecordingList recordings={nodes} />
			<Pagination
				makeRoute={(l, i) =>
					makeConferenceRoute(l, data?.conference?.id || '', i)
				}
				{...pagination}
			/>
		</>
	);
}

export default withFailStates(ConferenceDetail, ({ nodes }) => !nodes?.length);
