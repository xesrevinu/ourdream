import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import requireDir from 'require-dir'
import koaRouter from 'koa-router'
import middleware from '../middleware/index'

export default (app) => {
  const middle = middleware(app)
  const ctrls = requireDir(app.config.ctrlPath)
  const apis = requireDir(app.config.apiPath, {
    recurse: true
  })

  // index router
  let pubRouter = (rName, inject) => {
    let Router = new koaRouter()
    let routes = require(rName)(Router, inject, middle)
    app.use(routes.routes())
  }

  pubRouter('./ctrl',ctrls)
  pubRouter('./api',apis)

  // 404 Error handle
  app.use(function*(next) {
    if (app.env === 'development') {
      this.status = 500
      this.body = `<h2 style="text-align:centermargin-top:20%">未定义的路由=>${this.url}</h2>`
      return
    }
    this.type = 'text/html'
    this.status = 404
    yield this.render('404')
  })
}
