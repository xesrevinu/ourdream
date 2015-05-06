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
    let exist =
      yield User.exist(body.email);
    if (exist > 0) {
      this.body = {
        status: 0,
        msg: null,
        type:'error',
        error: '此email已被注册'
      }
      return
    }
    body.cover = 'https://avatars3.githubusercontent.com/u/7436176?v=3&s=460'
    body.nicename='Kee'
    let newUser = new User(body)
    try {
      yield newUser.save()
    } catch (e) {
      console.log(e)
    }
    this.session.user = {
      _id: newUser._id
    }
    this.redirect('/')
  }
}
