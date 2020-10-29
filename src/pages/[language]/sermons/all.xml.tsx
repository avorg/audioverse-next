import SermonListXml, { SermonListXmlProps } from '@containers/sermon/list.xml';
import { LANGUAGES } from '@lib/constants';

export default SermonListXml;

interface StaticProps {
	props: SermonListXmlProps;
	revalidate: number;
}

export async function getStaticProps(): Promise<StaticProps> {
	return {
		props: {
			sermons: [],
		},
		revalidate: 10,
	};
}

export async function getStaticPaths(): Promise<StaticPaths> {
	return {
		paths: Object.keys(LANGUAGES).map(
			(k) => `/${LANGUAGES[k].base_url}/sermons/all.xml`
		),
		fallback: true,
	};
}
