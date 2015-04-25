export default {
  send: function*(next) {
    this.state = {
      title: '发现'
    }
    yield this.render('find');
  }
}