export default (socket) => {
  socket.emit('asd', {
    a: 1
  })
  socket.on('user/login', function(data) {

  })
}