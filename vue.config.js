const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.resolve('dist'),
        routes: ['/', '/names', '/details'],
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          injectProperty: '__prerender',
          inject: {},
         })
      }),
    ]
  },
  pluginOptions: {
		sitemap: {
			urls: [
				'https://imion.eu/',
        'https://imion.eu/details',
				'https://imion.eu/names',
        'https://imion.eu/favourites',
			]
		}
	}
};