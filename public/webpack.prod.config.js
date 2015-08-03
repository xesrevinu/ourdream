var path = require('path')
var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var extractTextPlugin = require('extract-text-webpack-plugin')
var saveAssetsJson = require('assets-webpack-plugin')
var scssLoad = [
	'css?modules&importLoaders=2!autoprefixer?browsers=last 2 version!sass?sourceMap=true&sourceMapContents=true' + (path.resolve(__dirname, './node_modules'))
]
module.exports = {
	target: 'web',
	devtool: 'source-map',
	context: path.resolve(__dirname, '.'),
	entry: [
		'./index'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'js/[name]-[chunkhash].js',
		publicPath: '/dist/',
		chunkFilename: '[name]-[chunkhash].js'
	},
	progress: true,
	resolve: {
		modulesDirectories: [
			'src',
			'node_modules'
		],
		extensions: ['', '.json', '.js']
	},
	plugins: [
		new CleanPlugin([path.resolve(__dirname, '/dist')]),
		new extractTextPlugin('css/[name]-[chunkhash].css', {allChunks: true}),
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({output: {comments: false}}),
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
			loader: 'style!css!autoprefixer'//?browsers=last 2 version
		}, {
			test: /\.scss$/,
			loader: extractTextPlugin.extract("style", 'css?modules&importLoaders=2!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=trueincludePaths[]=' + (path.resolve(__dirname, './node_modules')))

		}, {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
		]
	}
}