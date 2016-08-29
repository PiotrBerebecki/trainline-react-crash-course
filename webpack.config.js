var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'exercises'),
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'static'),
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
      loaders: ['babel']
    }, {
      test: /\.json?$/,
      exclude: /node_modules/,
      loaders: ['json']
    }, {
      test: /\.md$/,
      loaders: ['html', 'remarkable']
    }, {
      test: /\.css$/,
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
