export default {
  sendIndex: function*(next) {
    this.state = {
      message: 'hello'
    }
    yield this.render('index');
  }
}