export default {
    checkLogin: function*(next) {
        if (!this.session.user) {
            yield next
        }
        yield next
    }
}