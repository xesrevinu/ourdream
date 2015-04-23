export default {
  sendIndex: function*(next) {

    this.state = {
      message: 'hello'
    }

    setTimeout(() => {
      this.app.socket.emit('hello', {
        name: 'Kee'
      })
    }, 2000)

    yield this.render('index');
  }
}