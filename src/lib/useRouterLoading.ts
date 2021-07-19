import Router from 'next/router';
import { useEffect, useState } from 'react';

// https://stackoverflow.com/a/63755519/937377
const useRouterLoading = (): boolean => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const start = () => setLoading(true);
		const end = () => setLoading(false);
		Router.events.on('routeChangeStart', start);
		Router.events.on('routeChangeComplete', end);
		Router.events.on('routeChangeError', end);
		return () => {
			Router.events.off('routeChangeStart', start);
			Router.events.off('routeChangeComplete', end);
			Router.events.off('routeChangeError', end);
		};
	}, []);
	return loading;
};

export default useRouterLoading;
