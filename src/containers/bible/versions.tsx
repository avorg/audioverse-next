import Link from 'next/link';
import React from 'react';

import withFailStates from '@components/HOCs/withFailStates';
import { GetBibleVersionsPageDataQuery } from '@lib/generated/graphql';
import { makeBibleVersionRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

type Versions = NonNullable<
	GetBibleVersionsPageDataQuery['audiobibles']['nodes']
>;

export interface VersionsProps {
	versions: Versions;
}

function Versions({ versions }: VersionsProps): JSX.Element {
	const languageRoute = useLanguageRoute();

	return (
		<>
			<ul>
				{versions.map((v) => (
					<li key={v.id}>
						<Link href={makeBibleVersionRoute(languageRoute, v.id)}>
							<a>{v.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default withFailStates(Versions, ({ versions }) => !versions.length);
