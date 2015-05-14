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
        msg: '注册失败',
        data:null
      }
    }
    if(exist>0){
      return this.body = {
        success: false,
        msg:'此email已被注册',
        data:null
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
        msg:'注册失败',
        data:null
      }
    }
    return this.body = {
      success: true,
      msg:'注册成功',
      data:null
    }
  }
}