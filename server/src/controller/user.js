import {
  User
}
from '../../data'
export default {
  sendUser: function*() {
    this.body = 'user'
  },
  sendRegister: function*() {
    this.state.title = '注册'
    yield this.render('register')
  },
  registerSuccess: function*() {
    console.log(this.locals, this.state)
    this.state.info =
      yield User.findUserInfo(this.session.uid)
    console.log(this.state.info)
    this.redirect('/')
  },
  sendLogin: function*() {
    this.state.title = '登录'
    yield this.render('login')
  },
  logout: function*() {
    console.log(123)
    this.body = 123
  }
}