const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
