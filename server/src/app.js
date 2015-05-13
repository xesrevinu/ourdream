process.env.NODE_ENV = 'development';
//发布,采用config/config-server-{NODE_ENV}.js作为配置
import polyfill from 'babel/polyfill'
import tracer from 'tracer'
import Server from './server'
import config from './config/config'

const logger = tracer.console(config.cliColor)
const server = new Server();

server.start(function(e) {
  const serverInfo = '\n server start lisent 3000 \n';
  logger.info(serverInfo);
  if (config.env == 'development') {
    require('./dev')
  }
})