import koa from 'koa'
import http from 'http'
import config from './config/config'
import route from './router/router'
import ioSocket from './socket/conection'
import mongoConnection from './model/connection'

class Server extends koa {
  constructor() {
    super();
    this.app = koa();
    this.app.config = config;
  }
  start(callback) {
    this.router();
    this.server = http.createServer(this.app.callback());
    this.connection();
    this.server.listen(config.listenPort, callback(this.serverEvent));
  }
  router() {
    route(this.app)
  }
  connection() {
    const mongodb = mongoConnection(config.mongo.host + config.mongo.database);
    //new ioSocket(this.server).connection()
  }
}

export default Server