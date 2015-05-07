import passport from 'koa-passport'
import {
  User
}
from '../../model'
export default {
  show: function*() {
    this.state.title = '登录'
    yield this.render('login')
  },
  login: function*() {
    var ctx = this;
    yield *passport.authenticate("local", function*(err, user, info) {
      if (err) {
        throw err;
      }
      console.log(err,user,info)
      if (user === false) {
        ctx.status = 401;
      } else {
        yield ctx.login(user);
        ctx.body = {
          user: user
        };
      }
    }).call(this);
  }
}