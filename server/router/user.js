export default (route,middleware,controller) => {
    route('/user')
        .get(function*(next) {
            this.body = 'user'
        })
}