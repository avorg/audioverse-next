import Link from 'next/link';
import React from 'react';

import { SponsorInfoFragment } from '@lib/generated/graphql';
import { makeSponsorRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

export default function SponsorInfo({
	sponsor,
}: {
	sponsor: SponsorInfoFragment;
}): JSX.Element {
	return (
		<p>
			<Link href={makeSponsorRoute(useLanguageRoute(), sponsor.id)}>
				<a>{sponsor.title}</a>
			</Link>
		</p>
	);
}
