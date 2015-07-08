var path = require('path')
var webpack = require('webpack')
var extractTextPlugin = require("extract-text-webpack-plugin");
var saveAssetsJson = require('assets-webpack-plugin');
var scssLoad = [
  'css',
  'autoprefixer?browsers=last 2 version',
  'sass?outputStyle=expanded'
]

module.exports = {
  target: 'web',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/bundle.[hash].js',
    publicPath: '/dist/',
    chunkFilename:'[id].[hash].bundle.js'
  },
  plugins: [
    new extractTextPlugin("css/app.[hash].css"),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    new saveAssetsJson({
      path: __dirname,
      filename: 'assets.json'
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 version'
    }, {
      test: /\.scss$/,
      loader: extractTextPlugin.extract("style", scssLoad.join("!"))
    }]
  }
}
