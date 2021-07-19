import Image from 'next/image';
import React from 'react';

import Pagination from '@components/molecules/pagination';
import TableList from '@components/organisms/tableList';
import { PaginationData } from '@lib/getPaginatedStaticProps';

interface Listable {
	id: string;
}

interface PaginatedListProps<T extends Listable> {
	pageTitle: string;
	pageImage?: string;
	children?: React.ReactNode;
	nodes: T[];
	makePageRoute: (languageRoute: string, page: number | string) => string;
	makeEntryRoute: (languageRoute: string, node: T) => string;
	parseEntryTitle?: (n: T) => string;
	parseEntryImageUrl?: (n: T) => string;
	pagination: PaginationData;
}

// TODO: Delete this component.
export default function PaginatedList<T extends Listable>({
	pageTitle,
	pageImage,
	children,
	nodes,
	makePageRoute,
	makeEntryRoute,
	parseEntryTitle,
	parseEntryImageUrl,
	pagination,
}: PaginatedListProps<T>): JSX.Element {
	return (
		<>
			{pageImage && (
				<Image src={pageImage} alt={pageTitle} width={100} height={100} />
			)}
			<h1>{pageTitle}</h1>
			{children}
			<TableList
				nodes={nodes}
				parseTitle={parseEntryTitle}
				parseImageUrl={parseEntryImageUrl}
				makeEntryRoute={makeEntryRoute}
			/>
			<Pagination makeRoute={makePageRoute} {...pagination} />
		</>
	);
}
