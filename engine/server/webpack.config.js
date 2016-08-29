const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug: true,
  devtool: 'eval',
  context: path.join(__dirname, '../client'),
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '../../static'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    loaders: [{
      test: /js?$/,
      exclude: /node_modules/,
      include: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../exercises')
      ],
      loaders: ['babel']
    }, {
      test: /\.json?$/,
      exclude: /node_modules/,
      include: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../exercises')
      ],
      loaders: ['json']
    }, {
      test: /\.md$/,
      include: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../exercises')
      ],
      loaders: ['html', 'remarkable']
    }, {
      test: /\.css$/,
      include: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../exercises')
      ],
      loaders: ['style', 'css']
    }, {
      test: /bootstrap\/js\//,
      loader: 'imports?jQuery=jquery'
    }, {
      test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  }
};
