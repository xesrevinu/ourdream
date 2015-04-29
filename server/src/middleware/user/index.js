import {
  User
}
from '../../model'
export default {
  checkModel: function*(next) {
    this.checkBody('email').isEmail("请输入正确的Email")
    this.checkBody('password').notEmpty("密码请输入6-20位").len(6, 20)
    if (this.errors) {
      this.status = 401
      this.body = {
        status: 0,
        msg: null,
        error: this.errors
      }
      return
    }
    yield next
  }
}