'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (route, middleware, controller) {
  route('/user').get(controller.sendUser);

  route('/user/login').get(controller.loginSuccess);

  route('/user/register').get(controller.sendRegister).post(middleware.user.checkUserModel, middleware.user.register, controller.registerSuccess);
};

module.exports = exports['default'];