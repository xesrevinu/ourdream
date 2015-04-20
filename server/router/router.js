import middleware from '../middleware'
import controller from '../controller'
export default (app) => {
    const middlewares = middleware(app)

    function gPath(path) {
        return app.route(path)
    }

    function addRtoute(path) {
        require(path)(gPath, middlewares,controller)
    }

    addRtoute('./index')
    addRtoute('./user')
    addRtoute('./profile')

    return function*(next) {
        if (app.env === 'development') {
            this.status = 501
            this.body = '未定义的路由'
        }
        yield next
    }
}