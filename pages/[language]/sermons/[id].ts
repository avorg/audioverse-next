import SermonDetail, { SermonDetailProps } from '@containers/sermon/detail';
import { getSermon, getSermons } from '@lib/api';
import { LANGUAGES } from '@lib/constants';

export default SermonDetail;

interface StaticProps {
	props: SermonDetailProps;
	revalidate: number;
}

export async function getStaticProps({
	params,
}: {
	params: { id: string };
}): Promise<StaticProps> {
	let sermon;

	try {
		sermon = await getSermon(params.id);
	} catch {
		sermon = null;
	}

	return {
		props: {
			sermon,
		},
		revalidate: 10,
	};
}

export async function getStaticPaths(): Promise<StaticPaths> {
	const keys = Object.keys(LANGUAGES),
		pathSetPromises = keys.map(async (l) => {
			const { nodes } = await getSermons(l),
				dateFloor = new Date('2020-06-01'), // TODO: Should this be rolling?
				filteredNodes = nodes.filter(
					(n) => new Date(n.recordingDate) > dateFloor
				),
				baseUrl = LANGUAGES[l].code;

			return (
				filteredNodes.map((node) => `/${baseUrl}/sermons/${node.id}`) || []
			);
		});

	const pathSets = await Promise.all(pathSetPromises);

	return {
		paths: pathSets.flat(),
		fallback: 'unstable_blocking',
	};
}
