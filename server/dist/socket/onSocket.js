'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _user = require('./user');

var _user2 = _interopRequireWildcard(_user);

var _message = require('./message');

var _message2 = _interopRequireWildcard(_message);

exports['default'] = function (socket) {
  socket.on('disconnect', function () {});
  _user2['default'](socket);
  _message2['default'](socket);
};

module.exports = exports['default'];