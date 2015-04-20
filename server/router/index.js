export default (route, middleware, controller) => {
    route('/')
        .get(function*(next) {
            this.state = {
                title: '首页'
            }
            yield this.render('index', {
                message: 'hello world'
            })
        })
}