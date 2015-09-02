var path = require('path')
var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var extractTextPlugin = require('extract-text-webpack-plugin')
var saveAssetsJson = require('assets-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin');
var cssLoaders = [
	'css',
	'autoprefixer-loader?browsers=last 2 versions'
]
var relativeAssetsPath = '../dist';
var assetsPath = path.join(__dirname, relativeAssetsPath);

module.exports = {
	target: 'web',
	context: path.resolve(__dirname, '..'),
	entry: [
		'./src/index',
	],
	output: {
		path: assetsPath,
		filename: 'js/[name]-[chunkhash].js',
		publicPath: '/dist/',
		chunkFilename: '[name]-[chunkhash].js'
	},
	progress: true,
	resolve: {
		modulesDirectories: [
			'src',
			'bower_components',
			'node_modules',
		],
		extensions: ['', '.json', '.js']
	},
	plugins: [
		new CleanPlugin([relativeAssetsPath]),
		new extractTextPlugin('css/[name]-[chunkhash].css',{
			allChunks:true
		}),
		new webpack.IgnorePlugin(/\.\/dev/),
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    }),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new htmlWebpackPlugin({
      title: 'Redux React Router Async Example',
      filename: 'index.html',
      template: './src/index.template.html',
      //favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
	],
	module: {
		loaders: [
			{test: /\.js$/,loaders: ['babel'],exclude: /node_modules/},
			{test: /\.css$/,loader:  cssLoaders.join('!')},
			{test: /\.styl$/, loader:  extractTextPlugin.extract("style-loader",'css!autoprefixer?browsers=last 2 version!stylus-loader')},
			{test: /\.(png|jpg)$/, loader: "url-loader?mimetype=image/png" },
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
		]
	}
}
