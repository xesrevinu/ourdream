'use strict'
//发布,采用config/config-server-{NODE_ENV}.js作为配置
process.env.NODE_ENV = 'development';
//process.env.NODE_ENV = 'production';
//process.env.NODE_ENV = 'test';

import Server from './server/server'
import tracer from 'tracer'
import config from './config/config'

const logger = tracer.console(config.cliColor)
const server = new Server();

global.logger = logger

server.start(function(e) {
  let {
    action, status, port
  } = e;
  const serverInfo = `
               server ${action}
               ================
               server status: ${status}
               server listen port:${port}
               `
  logger.info(serverInfo)
})