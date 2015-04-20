var controllers = require('../controller');
module.exports = function(app, middleware) {
    app.use(middleware.middlewareAllTime)

    //app.all(middleware.auth)
    //console.log(app.use)
    app.route('/')
    .get(controllers.user.index)



    app.use(function*(next) {
        console.log(2)
        yield next
    })

}