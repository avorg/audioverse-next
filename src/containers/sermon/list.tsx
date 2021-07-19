import Link from 'next/link';
import React from 'react';

import withFailStates from '@components/HOCs/withFailStates';
import Pagination from '@components/molecules/pagination';
import RecordingList from '@components/molecules/recordingList';
import RssLink from '@components/molecules/rssLink';
import { GetSermonListStaticPropsQuery } from '@lib/generated/graphql';
import {
	makeSermonListRoute,
	makeSermonListRouteAll,
	makeSermonListRouteAudio,
	makeSermonListRouteVideo,
} from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

type Sermons = NonNullable<GetSermonListStaticPropsQuery['sermons']['nodes']>;

export interface SermonListProps {
	nodes: Sermons;
	rssPath: string;
	filter: string;
	pagination: {
		current: number;
		total: number;
	};
}

function SermonList({ nodes, pagination, rssPath, filter }: SermonListProps) {
	const lang = useLanguageRoute();

	return (
		<div>
			<RssLink href={rssPath} />
			<div>
				<Link href={makeSermonListRouteAll(lang, 1)}>
					<a>All</a>
				</Link>
				<Link href={makeSermonListRouteVideo(lang, 1)}>
					<a>Video</a>
				</Link>
				<Link href={makeSermonListRouteAudio(lang, 1)}>
					<a>Audio</a>
				</Link>
			</div>
			<RecordingList recordings={nodes} />
			<Pagination
				current={pagination.current}
				total={pagination.total}
				makeRoute={(l, i) => makeSermonListRoute(l, filter, i)}
			/>
		</div>
	);
}

const should404 = (props: SermonListProps) => !props.nodes?.length;

export default withFailStates(SermonList, should404);
