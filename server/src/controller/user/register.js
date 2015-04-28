import {
  User
}
from '../../model'

export default {
  get: function*() {
    this.state.title = '注册'
    yield this.render('register')
  },
  post: function*() {
    this.body = 'post'
  }
}