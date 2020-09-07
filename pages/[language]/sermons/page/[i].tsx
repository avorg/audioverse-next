import SermonList from '../../../../containers/sermon/list';
import { entriesPerPage, languages } from '../../../../lib/constants';
import { getSermonCount, getSermons } from '../../../../lib/api';
import _ from 'lodash';

export default SermonList;

export async function getStaticProps({ params }) {
	const { i, language } = params,
		langKey = _.findKey(languages, (l) => l.base_url === language),
		offset = (i - 1) * entriesPerPage;

	return {
		props: {
			sermons: await getSermons(langKey, {
				offset,
				first: entriesPerPage,
			}),
		},
	};
}

export async function getStaticPaths() {
	const pathSetPromises = Object.keys(languages).map(async (k) => {
			const sermonCount = await getSermonCount(k),
				pageCount = Math.ceil(sermonCount / entriesPerPage),
				numbers = Array.from(Array(pageCount).keys()),
				base = languages[k].base_url;

			return numbers.map((x) => `/${base}/sermons/page/${x + 1}`);
		}),
		pathSets = await Promise.all(pathSetPromises);

	return { paths: pathSets.flat(), fallback: 'unstable_blocking' };
}