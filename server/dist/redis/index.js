'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _redis = require('redis');

var _redis2 = _interopRequireWildcard(_redis);

var client = _redis2['default'].createClient();

exports['default'] = client;
module.exports = exports['default'];