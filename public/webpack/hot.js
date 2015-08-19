var webpack = require('webpack');
var path = require('path')
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
	contentBase: path.join(__dirname, '../dev'),
	publicPath: '',
	quiet: !true,
	noInfo: false,
	hot: true,
	inline: true,
	lazy: false,
	historyApiFallback: true,
	headers: {"Access-Control-Allow-Origin": "*"},
	stats: {
		colors: true
	}
}).listen(4000, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:4000');
});
