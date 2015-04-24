import io from 'socket.io'
import onSocket from './onSocket'
class socket extends io {
  constructor(server) {
    super(server)
  }
  connection(done) {
    //this.set('authorization', this.auth)
    this.on('connection', this.onConnection)
  }
  onConnection(sk) {
    onSocket(sk)
  }
  auth() {
    console.log(2)
  }
  listen(port) {
    //super.listen(port)
    super.listen(port)
  }
}

export default socket