import SeriesList from '@containers/series/list';
import {
	getSeriesListPageData,
	GetSeriesListPageDataQuery,
	getSeriesListPathsData,
} from '@lib/generated/graphql';
import { getNumberedStaticPaths } from '@lib/getNumberedStaticPaths';
import {
	getPaginatedStaticProps,
	PaginatedStaticProps,
} from '@lib/getPaginatedStaticProps';

export default SeriesList;

type SeriesType = NonNullable<
	GetSeriesListPageDataQuery['serieses']['nodes']
>[0];
export type SeriesListStaticProps = PaginatedStaticProps<
	GetSeriesListPageDataQuery,
	SeriesType
>;

export async function getStaticProps({
	params,
}: {
	params: { language: string; i: string };
}): Promise<SeriesListStaticProps> {
	return getPaginatedStaticProps(
		params,
		getSeriesListPageData,
		(d) => d.serieses.nodes,
		(d) => d.serieses.aggregate?.count
	);
}

export async function getStaticPaths(): Promise<StaticPaths> {
	return getNumberedStaticPaths(
		'series',
		getSeriesListPathsData,
		(d) => d.serieses.aggregate?.count
	);
}
