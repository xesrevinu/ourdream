import {
  User
}
from '../../model'
export default {
  get: function*() {
    this.body =
      yield User.findUserInfo('12qweqwe123')
  }
}