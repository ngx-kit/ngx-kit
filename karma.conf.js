const webpackConfig = require('./test/webpack.test');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './test/test.js'
    ],
    preprocessors: {
      './test/test.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: false,
      stats: {
        colors: true
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
};
