import koa from 'koa'
import cluster from 'cluster'
import http from 'http'
import os from 'os'
import child_process from 'child_process'
import config from '../config/config'
import route from './router/router'

const cpus = os.cpus().length

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
        let server = http.createServer(this.app.callback())
        return server.listen(config.listenPort, callback(this.serverEvent))
    }
    router() {
        route(this.app)
    }
    static stopServer() {
        process.on('exit', (e) => {
            logger.warn('server is stop ')
        })
        process.exit('stopServer')
    }
}

export default Server