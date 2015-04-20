'use strict'
import clc from 'cli-color'
const root = process.cwd();
export default {
	root: root,
	listenPort: 3000,
	keys: ['koa secret'],
	mongo: {
		host: "mongodb://localhost/",
		database: "ourdream",
		user: "",
		pass: ""
	},
	redis: {
		host: "localhost",
		port: 6379,
		db: "",
		pass: ""
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
		default: 'html',
		map: {
			html: 'swig'
		}
	},
	staticOpt: {
		// 3day
		maxAge: 24 * 60 * 60 * 3
	},
	memoryCapacity: 500,
	serverPath: root + "/server",
	publicPath: root + "/public/",
	staticPath: root + "/public/",
	viewPath: root + "/public/views/",
	cliColor: {
		filters: {
			log: clc.black.bgWhite,
			trace: clc.magenta,
			debug: clc.cyan,
			info: clc.green,
			warn: clc.xterm(202).bgXterm(236),
			error: clc.red.bold
		}
	}
};