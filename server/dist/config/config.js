'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _configDefault = require('./config-default');

var _configDefault2 = _interopRequireDefault(_configDefault);

var env = process.env.NODE_ENV || 'development';

var config = _configDefault2['default'];
config.env = env;

if (env !== 'development') {
  config = _lodash2['default'].merge(_configDefault2['default'], require('./config-' + env));
}
exports['default'] = config;
module.exports = exports['default'];