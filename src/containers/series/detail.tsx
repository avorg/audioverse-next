import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import withFailStates from '@components/HOCs/withFailStates';
import PageHeader from '@components/molecules/pageHeader';
import Pagination from '@components/molecules/pagination';
import RecordingList from '@components/molecules/recordingList';
import {
	makeConferenceRoute,
	makeSeriesDetailRoute,
	makeSponsorRoute,
} from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';
import { useQueryString } from '@lib/useQueryString';
import { SeriesDetailStaticProps } from '@pages/[language]/series/[id]/page/[i]';

type Props = SeriesDetailStaticProps['props'];

function SeriesDetail({ data, nodes, pagination, rssUrl }: Props) {
	const languageRoute = useLanguageRoute();
	const seriesId = useQueryString('id') || '';
	const sponsorId = data?.series?.sponsor?.id || '';
	const conferenceId = data?.series?.collection?.id || '';
	return (
		<>
			<PageHeader
				imageUrl={data?.series?.imageWithFallback.url}
				title={data?.series?.title || ''}
				rssUrl={rssUrl}
			/>
			<p>
				<Link href={makeSponsorRoute(languageRoute, sponsorId)}>
					<a>
						<FormattedMessage
							id={'seriesDetail__sponsorLinkPrefix'}
							defaultMessage={'Sponsor: {sponsorTitle}'}
							description={'Series detail page sponsor link prefix'}
							values={{
								sponsorTitle: data?.series?.sponsor?.title,
							}}
						/>
					</a>
				</Link>
			</p>
			{conferenceId && (
				<p>
					<Link href={makeConferenceRoute(languageRoute, conferenceId)}>
						<a>
							<FormattedMessage
								id={'seriesDetail__conferenceLinkPrefix'}
								defaultMessage={'Conference:'}
								description={'Series detail page conference link prefix'}
							/>{' '}
							{data?.series?.collection?.title}
						</a>
					</Link>
				</p>
			)}
			<RecordingList recordings={nodes} />
			<Pagination
				makeRoute={(l, i) => makeSeriesDetailRoute(l, seriesId, i)}
				{...pagination}
			/>
		</>
	);
}

export default withFailStates(SeriesDetail, ({ nodes }) => !nodes?.length);
