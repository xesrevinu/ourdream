export default {
  get: function*() {
    this.state.title = '登录'
    yield this.render('login')
  },
  post: function*() {
    console.log(this.request.body)
  },
  logout: function*() {
    if (this.logind) {
      this.session.user = null
      this.redirect('back')
      return
    }
    this.flash = {
      msg: '未登录'
    }
    this.redirect('back')
    return
  }
}