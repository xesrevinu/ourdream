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
    let body = this.request.body
    body.cover = 'https://avatars3.githubusercontent.com/u/7436176?v=3&s=460'
    let newUser = new User(body);
    var x =
      yield newUser.save()
    console.log(x)
    this.body = 'post'
  }
}