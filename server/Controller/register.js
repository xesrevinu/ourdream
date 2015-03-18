var Thunk = require('thunks')();
module.exports = function(router, render, modules) {
    var UserData = modules.Dao.User;

    router
        .get(function*() {
            this.body =
                yield render('register')
        })
        .post(function*() {
            var self = this;
            this.response.status = 200;
        })
}