/**
 * Created by xiaokekeT on 15/8/17.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ioredis = require('ioredis');

var _ioredis2 = _interopRequireDefault(_ioredis);

var redis = new _ioredis2['default']();
exports['default'] = redis;
module.exports = exports['default'];