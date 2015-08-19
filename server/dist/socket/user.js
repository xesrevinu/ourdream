'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (socket) {
  socket.emit('asd', {
    a: 1
  });
  socket.on('user/login', function (data) {});
};

module.exports = exports['default'];