'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _middleware = require('../middleware');

var _middleware2 = _interopRequireWildcard(_middleware);

exports['default'] = function (app) {
  var middlewares = _middleware2['default'](app);
  var routeFilePath = ['index', 'user', 'profile'];

  function gPath(path) {
    return app.route(path);
  }
  routeFilePath.forEach(function (file, index) {
    require('./' + file).call({}, gPath, middlewares, require('../controller/' + file));
  });

  return regeneratorRuntime.mark(function callee$1$0(next) {
    return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (app.env === 'development') {
            this.status = 501;
            this.body = '未定义的路由';
          }
          context$2$0.next = 3;
          return next;

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, callee$1$0, this);
  });
};

module.exports = exports['default'];