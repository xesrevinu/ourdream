'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _polyfill = require('babel/polyfill');

var _polyfill2 = _interopRequireWildcard(_polyfill);

//process.env.NODE_ENV= 'production';
//process.env.NODE_ENV= 'test';

var _Server = require('./server');

var _Server2 = _interopRequireWildcard(_Server);

var _tracer = require('tracer');

var _tracer2 = _interopRequireWildcard(_tracer);

var _config = require('./config/config');

var _config2 = _interopRequireWildcard(_config);

//发布,采用config/config-server-{NODE_ENV}.js作为配置
process.env.NODE_ENV = 'development';

var logger = _tracer2['default'].console(_config2['default'].cliColor);
var server = new _Server2['default']();

server.start(function (e) {
  var action = e.action;
  var status = e.status;
  var port = e.port;

  var serverInfo = '\n    server ' + action + '\n    -----------------------\n    server status: ' + status + '\n    server listen port:' + port + '\n';
  logger.info(serverInfo);
});