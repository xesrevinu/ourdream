export default {
  get: function*() {
    this.state.title = this.session.user.name || 'User'
    yield this.render('user')
  }
}