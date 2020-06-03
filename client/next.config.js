const withImages = require('next-images');

module.exports = withImages({
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
});
