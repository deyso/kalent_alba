import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		// adapter: adapter({ pages: 'docs' }),
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		  }),		paths: {
			base: '/kalent_alba'
		}
	}
};
