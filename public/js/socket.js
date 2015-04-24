var socket = io('http://localhost:3000');

socket.on('connect', function() {
  console.log('socket connect sucess')
});
socket.on('hello', function(data) {
  var hello = document.getElementById('hello');
  var _txt = hello.innerHTML;
  hello.innerHTML = _txt += data.name + '!'
});

socket.emit('message', {
  uid: 121441
});

socket.on('asd', function(data) {
  console.log(data)
});
socket.emit('user/login', {
  a: 100,
  b: 1000
})
socket.on('disconnect', function() {

});