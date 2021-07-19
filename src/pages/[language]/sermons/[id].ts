import SermonDetail, { SermonDetailProps } from '@containers/sermon/detail';
import { REVALIDATE } from '@lib/constants';
import {
	getSermonDetailData,
	getSermonDetailStaticPaths,
} from '@lib/generated/graphql';
import { getDetailStaticPaths } from '@lib/getDetailStaticPaths';
import { makeSermonRoute } from '@lib/routes';

export default SermonDetail;

export async function getStaticProps({
	params,
}: {
	params: { id: string };
}): Promise<StaticProps<SermonDetailProps>> {
	const { id } = params;
	const { sermon } = await getSermonDetailData({ id }).catch(() => ({
		sermon: null,
	}));

	return {
		props: {
			sermon,
			title: sermon?.title || null,
		},
		revalidate: REVALIDATE,
	};
}

export async function getStaticPaths(): Promise<StaticPaths> {
	return getDetailStaticPaths(
		getSermonDetailStaticPaths,
		(d) => d.sermons.nodes,
		(baseUrl, node) => makeSermonRoute(baseUrl, node.id)
	);
}
