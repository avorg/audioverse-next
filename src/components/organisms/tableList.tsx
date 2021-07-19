import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import useLanguageRoute from '@lib/useLanguageRoute';

interface Listable {
	id: string;
	title?: string;
	imageWithFallback?: {
		url?: string;
	};
}

interface TableListProps<T extends Listable> {
	nodes: T[];
	parseTitle?: (n: T) => string | undefined;
	parseImageUrl?: (n: T) => string | undefined;
	makeEntryRoute: (languageRoute: string, node: T) => string;
	columns?: {
		name: string;
		View: ({ node }: { node: T }) => JSX.Element;
	}[];
}

export default function TableList<T extends Listable>({
	nodes,
	parseTitle = (n: T) => n.title,
	parseImageUrl = (n: T) => n.imageWithFallback?.url,
	makeEntryRoute,
	columns,
}: TableListProps<T>): JSX.Element {
	const languageRoute = useLanguageRoute();

	// TODO: skip rendering nodes without title, or throw error
	return (
		<table>
			<tbody>
				{nodes?.map((n) => {
					const title = parseTitle(n);
					const route = makeEntryRoute(languageRoute, n);
					const imageSrc = parseImageUrl(n);

					return (
						<tr key={n.id}>
							<td>
								{imageSrc && (
									<Link href={route}>
										<a>
											<Image
												src={imageSrc}
												alt={title}
												width={100}
												height={100}
											/>
										</a>
									</Link>
								)}
							</td>
							<td>
								<Link href={route}>
									<a>{title}</a>
								</Link>
							</td>
							{columns?.map(({ name, View }) => (
								<td key={name}>
									<View node={n} />
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
