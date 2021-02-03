import Versions, { VersionsProps } from '@containers/bibles/versions';
import { REVALIDATE } from '@lib/constants';
import { getBibleVersionsPageData } from '@lib/generated/graphql';
import { makeBibleListRoute } from '@lib/routes';
import { getLanguageRoutes } from '@lib/getLanguageRoutes';

// TODO: If we ever add a load of Bibles, we may need to
//  add support for pagination.

export default Versions;

interface StaticProps {
	props: VersionsProps;
	revalidate: number;
}

export async function getStaticProps(): Promise<StaticProps> {
	const response = await getBibleVersionsPageData({});

	return {
		props: {
			versions: response?.audiobibles.nodes || [],
		},
		revalidate: REVALIDATE,
	};
}

export async function getStaticPaths(): Promise<StaticPaths> {
	const baseRoutes = getLanguageRoutes();

	return {
		paths: baseRoutes.map(makeBibleListRoute),
		fallback: true,
	};
}
