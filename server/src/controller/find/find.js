export default {
  get: function*() {
    this.state.title = '发现'
    yield this.render('find')
  },
  post: function*() {

  },
  del: function*() {

  }
}