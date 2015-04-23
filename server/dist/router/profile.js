'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (route, middleware, controller) {
  route('/profile').get(regeneratorRuntime.mark(function callee$1$0(next) {
    return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          this.body = 'profile';

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, callee$1$0, this);
  }));
};

module.exports = exports['default'];