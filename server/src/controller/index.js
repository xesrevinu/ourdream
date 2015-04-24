import sockets from '../socket/index'
export default {
  sendIndex: function*(next) {
    this.state = {
      message: 'hello'
    }
    yield this.render('index');
  }
}