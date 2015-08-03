'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tracer = require('tracer');

var _tracer2 = _interopRequireDefault(_tracer);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _configConfig = require('./config/config');

var _configConfig2 = _interopRequireDefault(_configConfig);

var logger = global.logger = _tracer2['default'].console(_configConfig2['default'].cliColor);
var server = new _server2['default']();

server.listen(_configConfig2['default'].listenPort, function () {
  var serverInfo = '\n server start lisent ' + _configConfig2['default'].listenPort + ' \n';
  logger.info(serverInfo);
  if (_configConfig2['default'].env === 'development') {
    require('./dev');
  }
});