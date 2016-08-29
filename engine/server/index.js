require('./bootstrap');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: {
    index: './engine/server/index.html'
  },
  hot: true
});

server.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
