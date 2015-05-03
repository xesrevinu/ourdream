import koaLogger from 'koa-logger'
import session from 'koa-session'
import favicon from 'koa-favicon'
import trieRouter from 'koa-trie-router'
import validate from 'koa-validate'
import flash from 'koa-flash'
import staticCache from 'koa-static-cache'
import body from 'koa-bodyparser'
import render from 'koa-swig-render'
import redisStore from 'koa-redis'
import mongoStore from 'koa-session-mongo'
import redisClient from '../redis'
import webset from './webset'

function middleware() {
    return {
      user: require('./user'),
      auth: require('./auth'),
    }
  }
  // const map = {
  //   render: 'server/dist/middleware/render'
  // }
export default (app) => {
  const middlewares = middleware()
  const config = app.config
  app.keys = config.keys
  app.use(body())
  app.use(koaLogger())
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
    cache: false,
    locals: {}
  }))
  app.use(webset(app))
  app.use(middlewares.auth.checkLogin)

  app.use(trieRouter(app))
    //app.use(settings)

  return middlewares
}