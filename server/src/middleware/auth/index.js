export default {
  checkLogin: function*(next) {
    this.logind = false
    if (this.session.user && this.session.user._id) {
      this.logind = true
    }
    yield next
  }
}