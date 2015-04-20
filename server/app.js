'use strict'
var http = require('http'),
	koa = require('koa'),
	logger = require('tracer'),
	routes = require('./routes'),
	middleware = require('./middleware'),
	app = koa(),
	server;


exports.startServer = function(config) {

	middleware = middleware(app,config);
	routes(app,middleware);

	let startInfo = `server start,listen port:${config.listenPort},NODE_DEV:${config.dev}`;

	app.on('error', function(err) {
		serverOnError(err);
	})
	server = http.createServer(app.callback());

	return server.listen(config.listenPort, function() {
		logger.colorConsole().info(startInfo)
	})
}

function serverOnError(err) {
	logger.colorConsole().error(err);
}