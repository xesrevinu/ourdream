'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _zlib = require('zlib');

var _zlib2 = _interopRequireDefault(_zlib);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaFavicon = require('koa-favicon');

var _koaFavicon2 = _interopRequireDefault(_koaFavicon);

var _koaValidate = require('koa-validate');

var _koaValidate2 = _interopRequireDefault(_koaValidate);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _koaSwigRender = require('koa-swig-render');

var _koaSwigRender2 = _interopRequireDefault(_koaSwigRender);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaSessionStore = require('koa-session-store');

var _koaSessionStore2 = _interopRequireDefault(_koaSessionStore);

var _koaTrieRouter = require('koa-trie-router');

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _koaStaticCache = require('koa-static-cache');

var _koaStaticCache2 = _interopRequireDefault(_koaStaticCache);

var _koaResponseTime = require('koa-response-time');

var _koaResponseTime2 = _interopRequireDefault(_koaResponseTime);

var _koaSessionMongoose = require('koa-session-mongoose');

var _koaSessionMongoose2 = _interopRequireDefault(_koaSessionMongoose);

var _webset = require('./webset');

var _webset2 = _interopRequireDefault(_webset);

//自定义中间件
var middleware = {
	auth: require('./auth'),
	filter: require('./filter')
};

exports['default'] = function (app) {
	var config = app.config;
	//get application Key
	app.keys = config.keys;
	// trust proxy
	app.proxy = true;
	//加载中间件
	app.use(_koaBodyparser2['default']());
	app.use(_koaResponseTime2['default']());
	app.use(_koaFavicon2['default'](config.favicon));
	console.log(config.env);
	if (config.env === 'development') {
		app.use(_koaLogger2['default']());
	}
	app.use(_koaCors2['default']());
	/*app.use(session({
 	store: mongooseStore.create(),
 	cookie: config.session.cookie,
 	resave: true,
 	saveUninitialized: true
 }))*/
	app.use(_koaStaticCache2['default'](config['static'].path, config['static'].options));
	app.use(_koaCompress2['default']({
		level: _zlib2['default'][config.compress.level]
	}));
	app.use(_koaValidate2['default']());
	app.use(_webset2['default'](app));
	app.use(_koaSwigRender2['default']({
		root: config.view.root,
		ext: config.view.ext,
		cache: config.view.cache
	}));
	app.use(_koaTrieRouter2['default'](app));
	return middleware;
};

module.exports = exports['default'];