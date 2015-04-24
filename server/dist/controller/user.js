'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  sendUser: regeneratorRuntime.mark(function sendUser(next) {
    return regeneratorRuntime.wrap(function sendUser$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          this.body = 'user';

        case 1:
        case 'end':
          return context$1$0.stop();
      }
    }, sendUser, this);
  }),
  sendRegister: regeneratorRuntime.mark(function sendRegister(next) {
    return regeneratorRuntime.wrap(function sendRegister$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          this.state = {
            title: '注册'
          };
          context$1$0.next = 3;
          return this.render('register');

        case 3:
        case 'end':
          return context$1$0.stop();
      }
    }, sendRegister, this);
  }),
  registerSuccess: regeneratorRuntime.mark(function registerSuccess(next) {
    return regeneratorRuntime.wrap(function registerSuccess$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          this.body = JSON.stringify(this.request);

        case 1:
        case 'end':
          return context$1$0.stop();
      }
    }, registerSuccess, this);
  }),
  loginSuccess: regeneratorRuntime.mark(function loginSuccess(next) {
    return regeneratorRuntime.wrap(function loginSuccess$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          this.state = {
            title: '登录'
          };
          context$1$0.next = 3;
          return this.render('login');

        case 3:
        case 'end':
          return context$1$0.stop();
      }
    }, loginSuccess, this);
  })
};
module.exports = exports['default'];