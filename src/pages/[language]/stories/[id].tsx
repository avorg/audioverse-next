import Story, { StoryProps } from '@containers/story/story';
import {
	getStoryDetailPageData,
	getStoryDetailPathsData,
} from '@lib/generated/graphql';
import { REVALIDATE } from '@lib/constants';
import { getDetailStaticPaths } from '@lib/getDetailStaticPaths';
import { makeStoryRoute } from '@lib/routes';

export default Story;

interface StaticProps {
	props: StoryProps;
	revalidate: number;
}

export interface GetStaticPropsArgs {
	params: {
		language: string;
		id: string;
	};
}

export async function getStaticProps({
	params,
}: GetStaticPropsArgs): Promise<StaticProps> {
	const { id } = params;

	let story = null;

	try {
		const result = await getStoryDetailPageData({ id });
		story = result.story;
	} catch {
		// do nothing
	}

	return { props: { story }, revalidate: REVALIDATE };
}

export async function getStaticPaths(): Promise<StaticPaths> {
	return getDetailStaticPaths(
		getStoryDetailPathsData,
		'stories.nodes',
		(languageRoute, node) => makeStoryRoute(languageRoute, node.id)
	);
}