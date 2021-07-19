import Image from 'next/image';
import React from 'react';

import RssLink from '@components/molecules/rssLink';

interface Props {
	imageUrl: string;
	title: string;
	rssUrl: string;
}

// TODO: Make everything but `title` optional
// TODO: Pass page title to RssLink to be used in title attr on link element

export default function PageHeader(props: Props): JSX.Element {
	return (
		<>
			<Image src={props.imageUrl} alt={props.title} width={100} height={100} />
			<h1>{props.title}</h1>
			<RssLink href={props.rssUrl} />
		</>
	);
}
