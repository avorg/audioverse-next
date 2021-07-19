import Link from 'next/link';
import React from 'react';

import withFailStates from '@components/HOCs/withFailStates';
import { GetVersionDetailPageDataQuery } from '@lib/generated/graphql';
import { makeBibleBookRoute } from '@lib/routes';
import useLanguageRoute from '@lib/useLanguageRoute';

type Books = NonNullable<
	NonNullable<GetVersionDetailPageDataQuery['audiobible']>['books']
>;

export interface VersionProps {
	books: Books;
}

// TODO: ADD VERSION TITLE

function Version({ books }: VersionProps): JSX.Element {
	const languageRoute = useLanguageRoute();

	return (
		<>
			<ul>
				{books.map((b) => (
					<li key={b.id}>
						<Link href={makeBibleBookRoute(languageRoute, b.id)}>
							<a>{b.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default withFailStates(Version, (props) => !props.books.length);
