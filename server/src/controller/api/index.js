import {
  User
} from '../../model'
const index = {
  valid: function*() {
    if (this.passport.user) {
      let user = yield User.findUser(this.passport.user.email)
      return this.body = user
    }
    return this.body = {
      success:true,
      info:'未登录',
      status:0
    }
  }
}
export default {
  invitation:require('./invitation'),
  index: index
}