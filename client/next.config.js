const withImages = require('next-images');
const withVideos = require('next-videos');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};

module.exports = withPlugins([[withImages], [withVideos]], nextConfig);
