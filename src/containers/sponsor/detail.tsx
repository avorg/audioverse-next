import Image from 'next/image';
import React from 'react';

import withFailStates from '@components/HOCs/withFailStates';
import { SponsorStaticProps } from '@pages/[language]/sponsors/[id]';

type Props = SponsorStaticProps['props'];

function Sponsor({ sponsor }: Props): JSX.Element {
	const img = sponsor?.imageWithFallback?.url;
	return (
		<>
			{img && <Image alt={sponsor?.title} src={img} width={100} height={100} />}
			<h1>{sponsor?.title}</h1>
			{/* TODO: Do not render these elements if nothing to display */}
			<p>{sponsor?.summary}</p>
			<p>{sponsor?.location}</p>
			<p>{sponsor?.website}</p>
			<p dangerouslySetInnerHTML={{ __html: sponsor?.description || '' }} />
		</>
	);
}

export default withFailStates(Sponsor, ({ sponsor }) => !sponsor);
