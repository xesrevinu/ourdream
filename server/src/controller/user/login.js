import {
  User
}
from '../../model'
export default {
  get: function*() {
    this.state.title = '登录'
    yield this.render('login')
  },
  post: function*() {
    let body = this.request.body
    const userAuth =
      yield User.findAuth(body.email)
    if (!userAuth) {
      this.body = {
        status: 0,
        msg: null,
        type: 'error',
        error: '帐号不存在'
      }
      return
    }
    if (body.password !== userAuth.password) {
      this.body = {
        status: 0,
        msg: null,
        type: 'error',
        error: '密码错误'
      }
      return
    }
    this.session.user = {
      _id: userAuth._id
    }
    this.body={
      status:1,
      msg:'ok'
    }
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