'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _User = require('../../data');

exports['default'] = {
  checkUserModel: regeneratorRuntime.mark(function checkUserModel(next) {
    var body, checkd;
    return regeneratorRuntime.wrap(function checkUserModel$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          body = {
            name: 10
          };
          checkd = _User.User.valid(body);

          if (!checkd) {
            context$1$0.next = 7;
            break;
          }

          context$1$0.next = 5;
          return next;

        case 5:
          context$1$0.next = 8;
          break;

        case 7:
          this.body = 'error';

        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, checkUserModel, this);
  }),
  register: regeneratorRuntime.mark(function register(next) {
    return regeneratorRuntime.wrap(function register$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return next;

        case 2:
        case 'end':
          return context$1$0.stop();
      }
    }, register, this);
  })
};
module.exports = exports['default'];