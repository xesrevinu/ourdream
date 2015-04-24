'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _clc = require('cli-color');

var _clc2 = _interopRequireWildcard(_clc);

'use strict';

var root = process.cwd();
var dev = process.env.NODE_ENV || 'development';
exports['default'] = {
	root: root,
	debug: true,
	listenPort: 3000,
	keys: ['koa secret'],
	socketPort: 3111,
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
		'default': 'html',
		map: {
			html: 'swig'
		}
	},
	staticOpt: {
		// 3day
		maxAge: dev !== 'development' ? 24 * 60 * 60 * 3 : null
	},
	memoryCapacity: 500,
	serverPath: root + '/server/dist',
	publicPath: root + '/public/',
	staticPath: root + '/public/',
	viewPath: root + '/public/views/',
	faviconPath: root + '/public/favicon.ico',
	cliColor: {
		filters: {
			log: _clc2['default'].black.bgWhite,
			trace: _clc2['default'].magenta,
			debug: _clc2['default'].cyan,
			info: _clc2['default'].green,
			warn: _clc2['default'].xterm(202).bgXterm(236),
			error: _clc2['default'].red.bold
		}
	}
};
module.exports = exports['default'];