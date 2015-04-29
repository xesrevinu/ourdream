export default {
  checkLogin: function*(next) {
    this.logind = false
    if (this.session.user && this.session.user._id) {
      this.logind = true
    }
    yield next
  },
  isLogin: function*(next) {
    if (this.logind) {
      this.status(403).body = {
        status: 0,
        msg: '已登录'
      }
      this.redirect('back')
      return
    }
    yield next
  },
  userRequired: function*(next) {
    if (!this.logind) {
      this.status(403).body = {
        status: 0,
        msg: '未登录'
      }
      return
    }
    yield next
  },
  authUser: function*(next) {

  }
}