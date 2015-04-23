import io from 'socket.io'
import onSocket from './onSocket'
class socket extends io {
  constructor(server) {
    super(server)
  }
  connection(fn) {
    this.on('connection', (sk) => {
      fn(sk)
      onSocket(sk)
    })
  }
  listen(port) {
    //super.listen(port)
    super.listen(port)
  }
}

export default socket