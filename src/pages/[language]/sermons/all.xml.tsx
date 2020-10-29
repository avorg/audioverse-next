import SermonListXml, { SermonListXmlProps } from '@containers/sermon/list.xml';

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
