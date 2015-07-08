import koa from 'koa'
import http from 'http'
import config from './config/config'
import bootstrap from './routes/bootstrap'
import ioSocket from './socket/conection'
import mongoConnection from './model/connection'

class Server extends koa {
	constructor() {
		super()
		this.app = koa()
		this.app.config = config
		global.app = {}
		global.app.service = {}
		global.app.model = {}
	}

	start(callback) {
		this.bootstrap()
		this.server = http.createServer(this.app.callback())
		this.server.listen(config.listenPort, callback)
	}
	bootstrap() {
		this.load()
		Server.connection()
		bootstrap(this.app)
	}
	load(){
		global.app.model = require('./model/index')
		global.app.service = require('./service/index')
	}
	static connection() {
		mongoConnection(config.mongo.host + config.mongo.database)
	}
}

export default Server