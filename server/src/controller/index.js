import sockets from '../socket/index'
export default {
  send: function*(next) {
    this.state = {
      message: 'hello'
    }
    yield this.render('index');
  }
}