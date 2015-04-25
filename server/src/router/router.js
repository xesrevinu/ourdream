import middleware from '../middleware'

export default (app) => {
  const middlewares = middleware(app)
  const routeFilePath = {
    'index': './index',
    'user': './user',
    'profile': './profile',
    'find': './find'
  }

  function gPath(path) {
    return app.route(path)
  }
  for (let i in routeFilePath) {
    let ctrl
    try {
      ctrl = require('../controller/' + i)
    } catch (e) {
      ctrl = {}
    }
    require(routeFilePath[i]).call({}, gPath, middlewares, ctrl)
  }
  return function*(next) {
    if (app.env === 'development') {
      this.status = 501
      this.body = '未定义的路由'
    }
    yield next
  }
}