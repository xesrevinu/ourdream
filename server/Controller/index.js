var indexController = {
    sendIndex: function*(next) {
        this.state = {
            message: 'hello'
        }
        yield this.render('index');
    },

}
export default {
    index: indexController,
    user: require('./user'),
    profile: require('./profile')
}