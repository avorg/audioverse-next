import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import withFailStates from '@components/HOCs/withFailStates';
import Pagination from '@components/molecules/pagination';
import RecordingList from '@components/molecules/recordingList';
import RssLink from '@components/molecules/rssLink';
import { makeSponsorRoute, makeSponsorTeachingsRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';
import { SponsorTeachingsStaticProps } from '@pages/[language]/sponsors/[id]/teachings/page/[i]';

type Props = SponsorTeachingsStaticProps['props'];

function SponsorTeachings({
	nodes,
	data,
	pagination,
	rssPath,
}: Props): JSX.Element {
	const languageRoute = useLanguageRoute();
	const img = data?.sponsor?.imageWithFallback?.url;

	return (
		<>
			{img && (
				<Image alt={data?.sponsor?.title} src={img} width={100} height={100} />
			)}
			<h1>
				<Link href={makeSponsorRoute(languageRoute, data?.sponsor?.id || '')}>
					<a>{data?.sponsor?.title}</a>
				</Link>
			</h1>
			<h2>
				<FormattedMessage
					id="sponsorTeachingsPage__pageTitle"
					defaultMessage="Teachings"
					description="Sponsor teachings page title"
				/>
			</h2>
			<RssLink href={rssPath} />
			<RecordingList recordings={nodes} />
			<Pagination
				{...pagination}
				makeRoute={(l, i) =>
					makeSponsorTeachingsRoute(l, data?.sponsor?.id || '', i)
				}
			/>
		</>
	);
}

export default withFailStates(SponsorTeachings, ({ nodes }) => !nodes.length);
