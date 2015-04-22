import middleware from '../middleware'
  //import controllers from '../controller/controllers'

/*var indexRoute = require('./index'),
  userRoute = require('./user'),
  profileRoute = require('./profile');*/

export default (app) => {
  const middlewares = middleware(app)
  const routeFilePath = [
    'index',
    'user',
    'profile'
  ]

  function gPath(path) {
    return app.route(path)
  }
  routeFilePath.forEach(function(file, index) {
    require('./' + file).apply({}, [gPath, middleware, require('../controller/' + file)])
  })

  return function*(next) {
    if (app.env === 'development') {
      this.status = 501
      this.body = '未定义的路由'
    }
    yield next
  }
}