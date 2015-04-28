export default {
  checkLogin: function*(next) {
    this.logind = false
    if (this.session.user && this.session.user._id) {
      this.logind = true
      yield next
    }
  },
  isLogin: function*(next) {
    if (this.logind) {
      this.flash = {
        msg: '已登录'
      }
      this.redirect('back')
      return
    }
    yield next
  },
}