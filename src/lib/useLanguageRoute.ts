import _ from 'lodash';
import { useRouter } from 'next/router';

const useLanguageRoute = (): string => {
	const router = useRouter();
	const lang = _.get(router, 'query.language');

	return typeof lang === 'string' ? lang : 'en';
};

export default useLanguageRoute;
