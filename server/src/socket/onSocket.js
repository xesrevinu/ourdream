import user from './user'
import message from './message'
export default (socket) => {
  socket.on('disconnect', function() {

  });
  user(socket)
  message(socket)
}