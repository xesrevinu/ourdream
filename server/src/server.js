import koa from 'koa'
import http from 'http'
import co from 'co'
import config from './config/config'
import bootstrap from './routes/bootstrap'
import ioSocket from './socket/conection'
import mongoConnection from './model/connection'

global.app = {}
global.app.service = {}
global.app.model = {}

let app = koa()

export default ()=> {
	app.config = config

	global.app.model = require('./model/index')
	global.app.service = require('./service/index')

	mongoConnection(config.mongo.host + config.mongo.database)
	bootstrap(app)

	return app
}