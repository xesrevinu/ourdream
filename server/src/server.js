import koa from 'koa'
import http from 'http'
  //import os from 'os'
  //import cluster from 'cluster'
  //import child_process from 'child_process'
import config from './config/config'
import route from './router/router'
import ioSocket from './socket/conection'
import mongoConnection from './model/connection'
  //const cpus = os.cpus().length

class Server extends koa {
  constructor() {
    super()
    this.app = koa()
    this.app.config = config
      //pm2 实现reload热重载 这些先打酱油
    this.serverEvent = {
      action: 'start',
      status: 'online',
      port: config.listenPort
    }
  }
  start(callback) {

    this.router()
    this.server = http.createServer(this.app.callback())
    this.socket()
    this.server.listen(config.listenPort, callback(this.serverEvent))

  }
  router() {
    var mongodb = mongoConnection(config.mongo.host + config.mongo.database)
    route(this.app)
  }
  socket(done) {
    new ioSocket(this.server).connection()
  }
  static stopServer() {
    process.on('exit', (e) => {
      logger.warn('server is stop ')
    })
    process.exit('stopServer')
  }
}

export default Server