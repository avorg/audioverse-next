import NextI18Next from 'next-i18next';
import path from 'path';
import { LANGUAGES } from './constants';
import _ from 'lodash';

const getI18next = () =>
	new NextI18Next({
		defaultLanguage: 'en',
		otherLanguages: _.flatMap(LANGUAGES, (l) => _.get(l, 'code')),
		localePath: path.resolve('./public/static/locales'),
	});

export default getI18next;
