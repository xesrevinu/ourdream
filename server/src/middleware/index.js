import zlib from 'zlib'
import logger from 'koa-logger'
import favicon from 'koa-favicon'
import validate from 'koa-validate'
import compress from 'koa-compress'
import passport from 'koa-passport'
import render from 'koa-swig-render'
import bodyparser from 'koa-bodyparser'
import session from 'koa-session-store'
import trieRouter from 'koa-trie-router'
import staticCache from 'koa-static-cache'
import responseTime from 'koa-response-time'
import mongooseStore from 'koa-session-mongoose'
import webset from './webset'

export default (app) => {
  const middlewares = {
    user: require('./user'),
    auth: require('./auth'),
    helper: require('./helper')
  };
  const config = app.config;
  app.keys = config.keys;
  // trust proxy
  app.proxy = true;
  app.use(bodyparser());
  app.use(responseTime());
  app.use(favicon(config.faviconPath));
  if (config.env === 'development') {
    app.use(logger());
  }
  app.use(session({
    name: 'mysite',
    store: mongooseStore.create(),
    cookie: config.session.cookie,
    resave: true,
    saveUninitialized: true
  }));
  app.use(staticCache(config.staticPath, config.staticOpt));
  app.use(compress({
    level: config.env === 'development' ? zlib.Z_DEFAULT_COMPRESSION : zlib.Z_BEST_COMPRESSION
  }));
  app.use(validate());
  app.use(webset(app));
  app.use(render({
    root: config.viewPath,
    ext: 'html',
    cache: config.env === 'development' ? false : 'memory'
  }));
  app.use(middlewares.auth.isLogined);
  app.use(trieRouter(app));
  return middlewares
}