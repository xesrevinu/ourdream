import tracer from 'tracer'
import Server from './server'
import config from './config/config'

let logger = global.logger = tracer.console(config.cliColor)
let server = new Server()

server.listen(config.listenPort, function () {
	const serverInfo = `\n server start lisent ${config.listenPort} \n`
	logger.info(serverInfo)
	if (config.env === 'development') {
		require('./dev')
	}
})

