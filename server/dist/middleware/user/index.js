'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _User = require('../../data');

exports['default'] = {
  checkUserModel: regeneratorRuntime.mark(function checkUserModel(next) {
    var userModel, checkd;
    return regeneratorRuntime.wrap(function checkUserModel$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          userModel = this.request.body;
          checkd = false;

          if (userModel) {
            checkd = !checkd;
          }

          if (!checkd) {
            context$1$0.next = 8;
            break;
          }

          context$1$0.next = 6;
          return next;

        case 6:
          context$1$0.next = 9;
          break;

        case 8:
          this.body = 'error';

        case 9:
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