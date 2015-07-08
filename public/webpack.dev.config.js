var path = require('path')
var webpack = require('webpack')

var scssLoad = [
  'style',
  'css',
  'autoprefixer?browsers=last 2 version',
  'sass?outputStyle=expanded&sourceMap'
]
module.exports = {
  target: 'web',
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, '/dev'),
    filename: 'js/bundle.js',
    publicPath: '/dev/',
    chunkFilename: '[id].bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 version'
    }, {
      test: /\.scss$/,
      loader: scssLoad.join("!")
    }]
  }
}
