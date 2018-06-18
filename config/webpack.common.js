const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const { PATHS } = require('./constants');

module.exports = {
  resolve: {
    modules: [PATHS.src, 'node_modules'],
  },
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: './js/[name]__[hash:5].js',
    chunkFilename: '[name]__[hash:5].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|svg|eot|ttf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(PATHS.src, 'index.html'),
      filename: './index.html',
      // inject: 'head',
    }),
  ],
};
