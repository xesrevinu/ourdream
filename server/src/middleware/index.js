import flash from 'koa-flash'
import logger from 'koa-logger'
import session from 'koa-session'
import favicon from 'koa-favicon'
import redisStore from 'koa-redis'
import validate from 'koa-validate'
import compress from 'koa-compress'
import render from 'koa-swig-render'
import bodyparser from 'koa-bodyparser'
import trieRouter from 'koa-trie-router'
import staticCache from 'koa-static-cache'
import mongoStore from 'koa-session-mongo'
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
  app.use(logger())
  app.use(favicon(config.faviconPath));
  app.use(session({
    store: mongoStore.create({
      db: 'ourdream'
    }),
    cookie: config.session.cookie,
    resave: true,
    saveUninitialized: true
  }, app))
  app.use(flash())
  app.use(validate())
  app.use(staticCache(config.staticPath, config.staticOpt))
  app.use(render({
    root: config.viewPath,
    ext: 'html',
    cache: config.env === 'development' ? 'memory' : false,
    locals: {}
  }))
  app.use(webset(app))
  app.use(middlewares.auth.checkLogin)
  app.use(trieRouter(app))
  return middlewares
}