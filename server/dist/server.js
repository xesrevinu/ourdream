'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _koa2 = require('koa');

var _koa3 = _interopRequireWildcard(_koa2);

var _http = require('http');

var _http2 = _interopRequireWildcard(_http);

//import os from 'os'
//import cluster from 'cluster'
//import child_process from 'child_process'

var _config = require('./config/config');

var _config2 = _interopRequireWildcard(_config);

var _route = require('./router/router');

var _route2 = _interopRequireWildcard(_route);

var _ioSocket = require('./socket/conection');

var _ioSocket2 = _interopRequireWildcard(_ioSocket);

//const cpus = os.cpus().length

var Server = (function (_koa) {
  function Server() {
    _classCallCheck(this, Server);

    _get(Object.getPrototypeOf(Server.prototype), 'constructor', this).call(this);
    this.app = _koa3['default']();
    this.app.config = _config2['default'];
    //pm2 实现reload热重载 这些先打酱油
    this.serverEvent = {
      action: 'start',
      status: 'online',
      port: _config2['default'].listenPort
    };
  }

  _inherits(Server, _koa);

  _createClass(Server, [{
    key: 'start',
    value: function start(callback) {
      this.router();
      this.server = _http2['default'].createServer(this.app.callback());
      this.socket();
      return this.server.listen(_config2['default'].listenPort, callback(this.serverEvent));
    }
  }, {
    key: 'router',
    value: function router() {
      _route2['default'](this.app);
    }
  }, {
    key: 'socket',
    value: function socket() {
      var _this = this;

      var self = this;
      var io = new _ioSocket2['default'](this.server);
      io.connection(function (socket) {
        _this.app.socket = socket;
      });
    }
  }], [{
    key: 'stopServer',
    value: function stopServer() {
      process.on('exit', function (e) {
        logger.warn('server is stop ');
      });
      process.exit('stopServer');
    }
  }]);

  return Server;
})(_koa3['default']);

exports['default'] = Server;
module.exports = exports['default'];