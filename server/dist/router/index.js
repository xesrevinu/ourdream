'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (route, middleware, controller) {
  route('/').get(controller.sendIndex);
};

module.exports = exports['default'];