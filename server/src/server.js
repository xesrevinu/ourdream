import koa from 'koa'
import http from 'http'
import config from './config/config'
import bootstrap from './routes/bootstrap'
import ioSocket from './socket/conection'
import requiredir from 'require-dir'
import mongoose from 'mongoose'

function connection(url) {
	let conn = mongoose.connect(url)
	return new Promise(function(resolve,reject){
		conn.connection.on('error',function(err){
			reject(err)
		})
		conn.connection.on('disconnected',function(){
			logger('mongo disconnected')
		})
		resolve(conn)
	})
}

global.app = {}
global.app.service = {}
global.app.model = {}

let app = koa()

export default ()=> {
	app.config = config

	global.app.model = requiredir('./model/')
	global.app.service = requiredir('./service/')

	connection(config.mongo.host + config.mongo.database)
	bootstrap(app)

	return app
}