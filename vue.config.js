const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.resolve('dist'),
        routes: ['/',],
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          injectProperty: '__prerender',
          inject: {},
         })
      }),
    ]
  }
};