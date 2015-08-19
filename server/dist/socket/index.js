'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (sk) {
  return {
    socket: sk,
    message: require('./message')(sk),
    user: require('./user')(sk)
  };
};

module.exports = exports['default'];