const withPWA = require('next-pwa');

// TODO: /en/books >> /en/books/page/1
// TODO: /en/sermons/all >> /en/sermons/all/page/1 (also video, audio)
// TODO: /en/stories >> /en/stories/page/1

module.exports = withPWA({
	pwa: {
		dest: 'public',
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/en',
				permanent: false,
			},
			{
				source: '/:lang/sermons',
				destination: '/:lang/sermons/all/page/1',
				permanent: true,
			},
		];
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: 'graphql-tag/loader',
		});

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	images: {
		domains: ['ik.imagekit.io'],
	},
});
