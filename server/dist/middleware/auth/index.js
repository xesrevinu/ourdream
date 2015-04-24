"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  checkLogin: regeneratorRuntime.mark(function checkLogin(next) {
    return regeneratorRuntime.wrap(function checkLogin$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          this.body = 123;

        case 1:
        case "end":
          return context$1$0.stop();
      }
    }, checkLogin, this);
  }),
  isUserExist: regeneratorRuntime.mark(function isUserExist(next) {
    return regeneratorRuntime.wrap(function isUserExist$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return next;

        case 2:
        case "end":
          return context$1$0.stop();
      }
    }, isUserExist, this);
  })
};
module.exports = exports["default"];