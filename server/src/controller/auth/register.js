import {
  User
}
from '../../model'

export default {
  show: function*() {
    this.state.title = '注册'
    yield this.render('register')
  },
  register: function*() {
    let body = this.request.body
    try {
      let newUser = new User(body)
      yield newUser.save()
      yield this.login(newUser);
    } catch (e) {
      console.log(e)
      this.body = {
        success: false
      }
    }
    this.body = {
      success: true
    }
  }
}