export default {
  send: function*() {
    this.state.title = '首页'
    yield this.render('index')
  }
}