'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

exports['default'] = function (socket) {
  socket.on('disconnect', function () {});
  (0, _user2['default'])(socket);
  (0, _message2['default'])(socket);
};

module.exports = exports['default'];