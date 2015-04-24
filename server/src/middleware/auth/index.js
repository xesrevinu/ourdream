export default {
  checkLogin: function*(next) {
    this.body = 123
  },
  isUserExist: function*(next) {
    yield next
  }
}