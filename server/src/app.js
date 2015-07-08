process.env.NODE_ENV = 'development';
import tracer from 'tracer'
import Server from './server'
import config from './config/config'

const logger = tracer.console(config.cliColor)
const server = new Server()

server.start(function(e) {
  const serverInfo = '\n server start lisent 3000 \n'
  logger.info(serverInfo)
  if (config.env === 'development') {
    require('./dev')
  }
})
