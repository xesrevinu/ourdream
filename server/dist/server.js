'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _configConfig = require('./config/config');

var _configConfig2 = _interopRequireDefault(_configConfig);

var _routesBootstrap = require('./routes/bootstrap');

var _routesBootstrap2 = _interopRequireDefault(_routesBootstrap);

var _socketConection = require('./socket/conection');

var _socketConection2 = _interopRequireDefault(_socketConection);

var _requireDir = require('require-dir');

var _requireDir2 = _interopRequireDefault(_requireDir);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function connection(url) {
	var conn = _mongoose2['default'].connect(url);
	return new Promise(function (resolve, reject) {
		conn.connection.on('error', function (err) {
			reject(err);
		});
		conn.connection.on('disconnected', function () {
			logger('mongo disconnected');
		});
		resolve(conn);
	});
}

global.app = {};
global.app.service = {};
global.app.model = {};

var app = (0, _koa2['default'])();

exports['default'] = function () {
	app.config = _configConfig2['default'];

	global.app.model = (0, _requireDir2['default'])('./model/');
	global.app.service = (0, _requireDir2['default'])('./service/');

	connection(_configConfig2['default'].mongo.host + _configConfig2['default'].mongo.database);
	(0, _routesBootstrap2['default'])(app);

	return app;
};

module.exports = exports['default'];