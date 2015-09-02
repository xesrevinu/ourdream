var path = require('path')
var webpack = require('webpack')
var extractTextPlugin = require('extract-text-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin');
var scssLoad = [
	'css',
	'autoprefixer?browsers=last 2 version',
	'sass?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, '../node_modules')+'&'+"includePaths[]=" + (path.resolve(__dirname, "../bower_components")))
]
var relativeAssetsPath = '../dev';
var assetsPath = path.join(__dirname, relativeAssetsPath);
module.exports = {
	devtool: 'inline-source-map',
	target: 'web',
	context: path.resolve(__dirname, '..'),
	entry: [
		'webpack-dev-server/client?http://localhost:4000',
		'webpack/hot/only-dev-server',
		//'bootstrap-sass!'+path.resolve(__dirname, './bootstrap-scss.config.js'),
		'./src/index'
	],
	output: {
		path: assetsPath,
		filename: 'js/bundle.js',
		publicPath: '',
		chunkFilename: '[id].bundle.js'
	},
	resolve: {
		modulesDirectories: [
			'src',
			'bower_components',
			'node_modules',
		],
		extensions: ['', '.json', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
    }),
		new htmlWebpackPlugin({
      title: 'Redux React Router Async Example',
      filename: 'index.html',
      template: './src/index.template.html',
      //favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot', 'babel'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style!css!autoprefixer?browsers=last 2 version'
		}, {
			test: /\.styl$/,
			loader: 'style!css!autoprefixer?browsers=last 2 version!stylus-loader'
		},
			{ test: /\.(png|jpg)$/, loader: "url-loader?mimetype=image/png" },
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}]
	}
}
