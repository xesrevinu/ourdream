export default {
  checkLogin: function*(next) {
    if (this.session.user && this.session.user.uid) {
      this.state.user = this.session.user
    }
    yield next
  },
  isLoginBack: function*(next) {
    if (this.session.user) {
      this.flash = {
        msg: '已登录'
      }
      return this.redirect('back')
    }
    yield next
  },
  isLogin: function*(next) {
    if (!this.session.user) {
      this.flash = {
        msg: '未登录'
      }
      return this.redirect('back')
    }
    yield next
  },
  isUserExist: function*(next) {
    yield next
  }
}