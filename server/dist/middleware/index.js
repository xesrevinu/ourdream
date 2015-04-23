'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireWildcard(_koaLogger);

var _session = require('koa-session');

var _session2 = _interopRequireWildcard(_session);

var _favicon = require('koa-favicon');

var _favicon2 = _interopRequireWildcard(_favicon);

var _views = require('koa-views');

var _views2 = _interopRequireWildcard(_views);

var _trieRouter = require('koa-trie-router');

var _trieRouter2 = _interopRequireWildcard(_trieRouter);

var _flash = require('koa-flash');

var _flash2 = _interopRequireWildcard(_flash);

var _staticCache = require('koa-static-cache');

var _staticCache2 = _interopRequireWildcard(_staticCache);

var _body = require('koa-bodyparser');

var _body2 = _interopRequireWildcard(_body);

function middleware() {
  return {
    user: require('./user'),
    auth: require('./auth')
  };
}

exports['default'] = function (app) {
  var middlewares = middleware();
  var config = app.config;
  app.keys = config.keys;
  app.use(_body2['default']());
  app.use(_favicon2['default'](config.faviconPath));
  app.use(_koaLogger2['default']());
  app.use(_staticCache2['default'](config.staticPath, config.staticOpt));
  // views中间件必须在路由上面
  app.use(_session2['default'](config.session, app));
  app.use(_flash2['default']());
  app.use(_views2['default'](config.viewPath, config.view));
  app.use(_trieRouter2['default'](app));

  return middlewares;
};

module.exports = exports['default'];