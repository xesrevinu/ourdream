import passport from 'koa-passport'
import {
  User
}
from '../../model'
export default {
  show: function*() {
    this.state.title = '登录';
    yield this.render('login')
  },
  login: function*(next) {
    var ctx = this;
    yield * passport.authenticate('local', function*(err, user, info) {
      if (err) throw err
      if (user === false) {
        ctx.status = 401;
        ctx.body = {
          success: true,
          origin:info.origin,
          info:info.error.message,
          status:0
        }
      } else {
        yield ctx.login(user);
        ctx.body = {
          success: true,
          user:user,
          info:'登录成功',
          status:1,
        }
      }
    }).call(this, next)
  }
}