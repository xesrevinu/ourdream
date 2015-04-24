export default {
  sendUser: function*(next) {
    this.body = 'user'
  },
  sendRegister: function*(next) {
    this.state = {
      title: '注册'
    }
    yield this.render('register')
  },
  registerSuccess: function*(next) {
    this.body = JSON.stringify(this.request)
  },
  loginSuccess: function*(next) {
    this.state = {
      title: '登录'
    }
    yield this.render('login')
  }
}