import zlib from 'zlib'
import flash from 'koa-flash'
import logger from 'koa-logger'
import session from 'koa-session-store'
import favicon from 'koa-favicon'
import redisStore from 'koa-redis'
import validate from 'koa-validate'
import compress from 'koa-compress'
import render from 'koa-swig-render'
import bodyparser from 'koa-bodyparser'
import trieRouter from 'koa-trie-router'
import staticCache from 'koa-static-cache'
import mongooseStore from 'koa-session-mongoose'
import responseTime from 'koa-response-time'
import webset from './webset'
import redisClient from '../redis'

export default (app) => {
  const middlewares = {
    user: require('./user'),
    auth: require('./auth'),
    helper: require('./helper')
  }
  const config = app.config
  app.keys = config.keys
  app.use(bodyparser())
  app.use(responseTime())
  app.use(favicon(config.faviconPath));
  app.use(logger())
  app.use(session({
    name: 'mysite',
    store: mongooseStore.create(),
    cookie: config.session.cookie,
    resave: true,
    saveUninitialized: true
  }))
  app.use(staticCache(config.staticPath, config.staticOpt))
  app.use(compress({
    //flush: zlib.Z_TREES,
    //最高压缩
    level: zlib.Z_BEST_COMPRESSION,
  }))
  app.use(flash())
  app.use(validate())
  app.use(render({
    root: config.viewPath,
    ext: 'html',
    cache: config.env === 'development' ? 'memory' : false
  }))
  app.use(middlewares.auth.checkLogin)
  app.use(webset(app))
  app.use(trieRouter(app))
  return middlewares
}