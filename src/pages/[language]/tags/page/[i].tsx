import TagList, { TagListProps } from '@containers/tag/list';
import {
	getTagListPageData,
	getTagListPathsData,
} from '@lib/generated/graphql';
import { getNumberedStaticPaths } from '@lib/getNumberedStaticPaths';
import { getPaginatedStaticProps } from '@lib/getPaginatedStaticProps';

export default TagList;

type GetStaticPropsArgs = {
	params: { language: string; i: string };
};

interface StaticProps {
	props: TagListProps;
	revalidate: number;
}

export async function getStaticProps({
	params,
}: GetStaticPropsArgs): Promise<StaticProps> {
	const { language, i } = params;

	return getPaginatedStaticProps(language, i, async (params) => {
		const result = await getTagListPageData(params);

		return result?.tags;
	});
}

export async function getStaticPaths(): Promise<StaticPaths> {
	return getNumberedStaticPaths('tags', async (language) => {
		const result = await getTagListPathsData({ language });

		return result?.tags?.aggregate?.count || 0;
	});
}