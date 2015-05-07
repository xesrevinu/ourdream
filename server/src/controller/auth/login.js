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
          info:info,
          status:0
        }
      } else {
        yield ctx.login(user);
        ctx.body = {
          success: true,
          info:info||null,
          status:1,
        }
      }
    }).call(this, next)
  }
}