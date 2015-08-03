'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _socketIo = require('socket.io');

var _socketIo2 = _interopRequireDefault(_socketIo);

var _onSocket = require('./onSocket');

var _onSocket2 = _interopRequireDefault(_onSocket);

var socket = (function (_io) {
  function socket(server) {
    _classCallCheck(this, socket);

    _io.call(this, server);
  }

  _inherits(socket, _io);

  socket.prototype.connection = function connection(done) {
    //this.set('authorization', this.auth)
    this.on('connection', this.onConnection);
  };

  socket.prototype.onConnection = function onConnection(sk) {
    _onSocket2['default'](sk);
  };

  socket.prototype.auth = function auth() {
    console.log(2);
  };

  socket.prototype.listen = function listen(port) {
    //super.listen(port)
    _io.prototype.listen.call(this, port);
  };

  return socket;
})(_socketIo2['default']);

exports['default'] = socket;
module.exports = exports['default'];