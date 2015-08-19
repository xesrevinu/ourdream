'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _socketIo = require('socket.io');

var _socketIo2 = _interopRequireDefault(_socketIo);

var _onSocket = require('./onSocket');

var _onSocket2 = _interopRequireDefault(_onSocket);

var socket = (function (_io) {
  _inherits(socket, _io);

  function socket(server) {
    _classCallCheck(this, socket);

    _get(Object.getPrototypeOf(socket.prototype), 'constructor', this).call(this, server);
  }

  _createClass(socket, [{
    key: 'connection',
    value: function connection(done) {
      //this.set('authorization', this.auth)
      this.on('connection', this.onConnection);
    }
  }, {
    key: 'onConnection',
    value: function onConnection(sk) {
      (0, _onSocket2['default'])(sk);
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
})(_socketIo2['default']);

exports['default'] = socket;
module.exports = exports['default'];