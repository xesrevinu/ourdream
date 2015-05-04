import logger from 'koa-logger'
import session from 'koa-session'
import favicon from 'koa-favicon'
import trieRouter from 'koa-trie-router'
import validate from 'koa-validate'
import flash from 'koa-flash'
import staticCache from 'koa-static-cache'
import bodyparser from 'koa-bodyparser'
import render from 'koa-swig-render'
import redisStore from 'koa-redis'
import mongoStore from 'koa-session-mongo'
import responseTime from 'koa-response-time'
import compress from 'koa-compress'
import redisClient from '../redis'
import webset from './webset'

function middleware() {
  return {
    user: require('./user'),
    auth: require('./auth'),
  }
}
export default (app) => {
  const middlewares = middleware()
  const config = app.config
  app.keys = config.keys
  app.use(bodyparser())
  app.use(logger())
  app.use(compress())
  app.use(responseTime())
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
    // views中间件必须在路由上面
  app.use(render({
    root: app.config.viewPath,
    ext: 'html',
    cache: app.config.env === 'development' ? 'memory' : false,
    locals: {}
  }))
  app.use(webset(app))
  app.use(middlewares.auth.checkLogin)

  app.use(trieRouter(app))
    //app.use(settings)

  return middlewares
}