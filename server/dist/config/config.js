'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _import = require('lodash');

var _import2 = _interopRequireWildcard(_import);

var _default_config = require('./config-server-default');

var _default_config2 = _interopRequireWildcard(_default_config);

'use strict';

var dev = process.env.NODE_ENV || 'development';

var config = _default_config2['default'];
config.dev = dev;

if (dev !== 'development') {
  config = _import2['default'].merge(_default_config2['default'], require('./config-server-' + dev));
}
exports['default'] = config;
module.exports = exports['default'];