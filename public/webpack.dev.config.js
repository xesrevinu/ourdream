var path = require('path')
var webpack = require('webpack')
var scssLoad = [
	'style',
	'css',
	'autoprefixer?browsers=last 2 version',
	'sass?outputStyle=expanded&sourceMap&includePaths[]=' + (path.resolve(__dirname, './node_modules'))
]
module.exports = {
	target: 'web',
	context: path.resolve(__dirname, '.'),
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
	progress: true,
	devtool: 'inline-source-map',
	resolve: {
		modulesDirectories: [
			'bower_components',
			'node_modules'
		],
		extensions: ['', '.json', '.js']
	},
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
		},
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}]
	}
}
