'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _configConfig = require('./config/config');

var _configConfig2 = _interopRequireDefault(_configConfig);

var _routesBootstrap = require('./routes/bootstrap');

var _routesBootstrap2 = _interopRequireDefault(_routesBootstrap);

var _socketConection = require('./socket/conection');

var _socketConection2 = _interopRequireDefault(_socketConection);

var _modelConnection = require('./model/connection');

var _modelConnection2 = _interopRequireDefault(_modelConnection);

global.app = {};
global.app.service = {};
global.app.model = {};

var app = _koa2['default']();

exports['default'] = function () {
	app.config = _configConfig2['default'];

	global.app.model = require('./model/index');
	global.app.service = require('./service/index');

	_modelConnection2['default'](_configConfig2['default'].mongo.host + _configConfig2['default'].mongo.database);
	_routesBootstrap2['default'](app);

	return app;
};

module.exports = exports['default'];