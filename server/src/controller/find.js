export default {
  send: function*() {
    this.state.title = '发现'
    yield this.render('find')
  }
}