import {
  User
}
from '../../data'
export default {
  checkUserModel: function*(next) {
    var body = {
      name: 10
    }
    var checkd = User.valid(body)
    if (checkd) {
      yield next
    } else {
      this.body = 'error'
    }
  },
  register: function*(next) {
    console.log(1)
    yield next
  }
}