import tracer from 'tracer'
import Server from './server'
import config from './config/config'
import mementLocal from 'moment/locale/zh-cn'
let logger = global.logger = tracer.console(config.cliColor)
let server = new Server()

server.listen(config.listenPort, function () {
	const serverInfo = `\n server start lisent ${config.listenPort} \n`
	logger.info(serverInfo)
})

