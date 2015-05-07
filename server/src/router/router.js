import middleware from '../middleware'

export default (app) => {
  const middlewares = middleware(app);
  const routeFilePath = {
    'index': './index',
    'user': './user',
    'auth': './auth',
    'find': './find',
    'api': './api'
  };

  function gPath(path) {
    return app.route(path)
  };
  /**
   * 注入中间件和controller
   */
  for (let i in routeFilePath) {
    let ctrl;
    try {
      ctrl = require('../controller/' + i);
    } catch (e) {
      console.error(e);
      ctrl = {};
    }
    require(routeFilePath[i])(gPath, middlewares, ctrl);
  }

  // 404 Error handle
  app.use(function*(next) {
    if (app.env === 'development') {
      this.status = 500;
      this.body = `<h2 style="text-align:center;margin-top:20%;">未定义的路由=>${this.url}</h2>`;
      return
    }
    this.type = 'text/html';
    this.status = 404;
    yield this.render('404');
  })

}