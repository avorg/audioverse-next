import SermonList, { SermonListProps } from '@containers/sermon/list';
import { getSermonCount, getSermons } from '@lib/api';
import { getNumberedStaticPaths } from '@lib/getNumberedStaticPaths';
import { getPaginatedStaticProps } from '@lib/getPaginatedStaticProps';

export default SermonList;

interface StaticProps {
	props: SermonListProps;
	revalidate: number;
}

interface GetStaticPropsArgs {
	params: { i: string; language: string };
}

export async function getStaticProps({
	params,
}: GetStaticPropsArgs): Promise<StaticProps> {
	const { i, language } = params;

	return getPaginatedStaticProps(
		language,
		parseInt(i),
		async (lang, options) => {
			return getSermons(lang, { ...options, hasVideo: false });
		}
	);
}

export async function getStaticPaths(): Promise<StaticPaths> {
	return getNumberedStaticPaths('sermons/audio', (lang) => {
		return getSermonCount(lang, { hasVideo: false });
	});
}