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
    let body = this.request.body;
    let exist;
    try {
      exist = yield User.exist(body.email)
    } catch (e) {
      console.error(e)
      return this.body = {
        success: false,
        info: '注册失败',
        status: 1
      }
    }
    if(exist>0){
      return this.body = {
        success: false,
        info:'此email已被注册',
        status:1
      }
    }
    try {
      let newUser = new User(body)
      yield newUser.save()
      yield this.login(newUser);
    } catch (e) {
      console.error(e)
      return this.body = {
        success: false,
        info:'注册失败',
        status:1
      }
    }
    return this.body = {
      success: true,
      info:'注册成功',
      status:1
    }
  }
}