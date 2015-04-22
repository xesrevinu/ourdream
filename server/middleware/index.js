import koaLogger from 'koa-logger'
import session from 'koa-session'
import favicon from 'koa-favicon'
import views from 'koa-views'
import trieRouter from 'koa-trie-router'
import flash from 'koa-flash'
import staticCache from 'koa-static-cache'
import body from 'koa-bodyparser'

function middleware() {
  return {
    user: require('./user'),
    auth: require('./auth')
  }
}

export default (app) => {
  const middlewares = middleware()
  const config = app.config
  app.keys = config.keys

  app.use(body())
  app.use(favicon(config.faviconPath));
  app.use(koaLogger())
  app.use(staticCache(config.staticPath, config.staticOpt))
    // views中间件必须在路由上面
  app.use(session(config.session, app))
  app.use(flash())
  app.use(views(config.viewPath, config.view))
  app.use(trieRouter(app))
  app.use(middlewares.auth.checkLogin)

  return middlewares
}