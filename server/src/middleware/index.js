import zlib from 'zlib'
import cors from 'koa-cors'
import logger from 'koa-logger'
import favicon from 'koa-favicon'
import validate from 'koa-validate'
import compress from 'koa-compress'
import passport from 'koa-passport'
import render from 'koa-swig-render'
import bodyparser from 'koa-bodyparser'
import session from 'koa-session-store'
import router from 'koa-trie-router'
import staticCache from 'koa-static-cache'
import responseTime from 'koa-response-time'
import mongooseStore from 'koa-session-mongoose'
import webset from './webset'

//自定义中间件
const middleware = {
	auth: require('./auth'),
	filter:require('./filter')
}

export default (app) => {
	const config = app.config
	//get application Key
	app.keys = config.keys
	// trust proxy
	app.proxy = true
	//加载中间件
	app.use(bodyparser())
	app.use(responseTime())
	app.use(favicon(config.favicon))
	console.log(config.env)
	if (config.env === 'development') {
		app.use(logger())
	}
	app.use(cors())
	/*app.use(session({
		store: mongooseStore.create(),
		cookie: config.session.cookie,
		resave: true,
		saveUninitialized: true
	}))*/
	app.use(staticCache(config.static.path, config.static.options))
	app.use(compress({
		level: zlib[config.compress.level]
	}))
	app.use(validate())
	app.use(webset(app))
	app.use(render({
		root: config.view.root,
		ext: config.view.ext,
		cache: config.view.cache
	}))
	app.use(router(app))
	return middleware
}
