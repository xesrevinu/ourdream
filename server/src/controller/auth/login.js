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
    let self = this;
    yield * passport.authenticate('local', function*(err, user, info) {
      if (err) throw err
      if (user === false) {
        self.status = 401;
        return self.body = {
          success: true,
          origin:info.origin,
          msg:info.error.message,
          data:null
        }
      } else {
        yield self.login(user);
        return self.body = {
          success: true,
          user:user,
          msg:'登录成功',
          data:null
        }
      }
    }).call(this, next)
  }
}