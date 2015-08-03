'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _requireDir = require('require-dir');

var _requireDir2 = _interopRequireDefault(_requireDir);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _middlewareIndex = require('../middleware/index');

var _middlewareIndex2 = _interopRequireDefault(_middlewareIndex);

exports['default'] = function (app) {
  var middle = _middlewareIndex2['default'](app);
  var ctrls = _requireDir2['default'](app.config.ctrlPath);
  var apis = _requireDir2['default'](app.config.apiPath, {
    recurse: true
  });

  // index router
  var pubRouter = function pubRouter(rName, inject) {
    var Router = new _koaRouter2['default']();
    var routes = require(rName)(Router, inject, middle);
    app.use(routes.routes());
  };

  pubRouter('./ctrl', ctrls);
  pubRouter('./api', apis);

  // 404 Error handle
  app.use(function* (next) {
    if (app.env === 'development') {
      this.status = 500;
      this.body = '<h2 style="text-align:centermargin-top:20%">未定义的路由=>' + this.url + '</h2>';
      return;
    }
    this.type = 'text/html';
    this.status = 404;
    yield this.render('404');
  });
};

module.exports = exports['default'];