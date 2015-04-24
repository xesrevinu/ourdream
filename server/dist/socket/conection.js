'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _io2 = require('socket.io');

var _io3 = _interopRequireWildcard(_io2);

var _onSocket = require('./onSocket');

var _onSocket2 = _interopRequireWildcard(_onSocket);

var socket = (function (_io) {
  function socket(server) {
    _classCallCheck(this, socket);

    _get(Object.getPrototypeOf(socket.prototype), 'constructor', this).call(this, server);
  }

  _inherits(socket, _io);

  _createClass(socket, [{
    key: 'connection',
    value: function connection(done) {
      //this.set('authorization', this.auth)
      this.on('connection', this.onConnection);
    }
  }, {
    key: 'onConnection',
    value: function onConnection(sk) {
      _onSocket2['default'](sk);
    }
  }, {
    key: 'auth',
    value: function auth() {
      console.log(2);
    }
  }, {
    key: 'listen',
    value: function listen(port) {
      //super.listen(port)
      _get(Object.getPrototypeOf(socket.prototype), 'listen', this).call(this, port);
    }
  }]);

  return socket;
})(_io3['default']);

exports['default'] = socket;
module.exports = exports['default'];