'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _sockets = require('../socket/index');

var _sockets2 = _interopRequireWildcard(_sockets);

exports['default'] = {
  sendIndex: regeneratorRuntime.mark(function sendIndex(next) {
    return regeneratorRuntime.wrap(function sendIndex$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          this.state = {
            message: 'hello'
          };
          context$1$0.next = 3;
          return this.render('index');

        case 3:
        case 'end':
          return context$1$0.stop();
      }
    }, sendIndex, this);
  })
};
module.exports = exports['default'];