import {
  User
}
from '../../data'
export default {
  checkUserModel: function*(next) {
    const userModel = this.request.body
    let checkd = false;
    if (userModel) {
      checkd = !checkd
    }
    if (checkd) {
      yield next
    } else {
      this.body = 'error'
    }
  },
  register: function*(next) {
    yield next
  }
}