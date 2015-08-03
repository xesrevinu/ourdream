'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cliColor = require('cli-color');

var _cliColor2 = _interopRequireDefault(_cliColor);

var root = process.cwd();
var env = process.env.NODE_ENV || 'development';
exports['default'] = {
  debug: true,
  root: root,
  listenPort: 3000,
  keys: ['koa secret secret'],
  mongo: {
    host: 'mongodb://localhost/',
    database: 'ourdream',
    user: '',
    pass: ''
  },
  redis: {
    host: 'localhost',
    port: 6379,
    db: '',
    pass: ''
  },
  session: {
    //defer: true,
    cookie: {
      path: '/',
      httpOnly: true,
      maxage: 24 * 60 * 60 * 3,
      rewrite: true,
      signed: true
    }
  },
  view: {
    ext: 'html',
    root: root + '/public/',
    cache: false
  },
  'static': {
    path: root + '/public/',
    options: {
      maxAge: null
    }
  },
  compress: {
    // 默认压缩
    level: 'Z_DEFAULT_COMPRESSION'
  },
  serverPath: root + '/server/dist',
  publicPath: root + '/public/',
  ctrlPath: root + '/server/dist/controller',
  apiPath: root + '/server/dist/api',
  favicon: root + '/public/favicon.ico',
  assets: require('../../../public/assets.json'),
  cliColor: {
    filters: {
      log: _cliColor2['default'].black.bgWhite,
      trace: _cliColor2['default'].magenta,
      debug: _cliColor2['default'].cyan,
      info: _cliColor2['default'].green,
      warn: _cliColor2['default'].xterm(202).bgXterm(236),
      error: _cliColor2['default'].red.bold
    }
  }
};
module.exports = exports['default'];