module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader?configFileName=./test/tsconfig.json']
      },
    ],
  }
};
