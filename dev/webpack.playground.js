const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'common': [
      /* Polyfills */
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone',
      '@angular/core',
      '@angular/common',
      '@angular/compiler',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/http',
      '@angular/router',
      '@angular/forms',
      'rxjs/Rx'
    ],
    'main': [
      './dev/playground/main.ts'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js',
    publicPath: 'http://localhost:9000/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader?configFileName=./dev/tsconfig.playground.json',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common']
    }),
    new HtmlWebpackPlugin({
      chunks: ['common', 'main'],
      template: './dev/playground/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join('./dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  }
};
