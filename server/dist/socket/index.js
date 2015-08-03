'use strict';

exports.__esModule = true;

exports['default'] = function (sk) {
  return {
    socket: sk,
    message: require('./message')(sk),
    user: require('./user')(sk)
  };
};

module.exports = exports['default'];