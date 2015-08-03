'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function connection(url) {
  var conn = _mongoose2['default'].connect(url);
  return new Promise(function (resolve, reject) {
    conn.connection.on('error', function (err) {
      reject(err);
    });
    conn.connection.on('disconnected', function () {
      logger('mongo disconnected');
    });
    resolve(conn);
  });
}
exports['default'] = connection;
module.exports = exports['default'];