let registerAuth = $('#registerAuth'),
  loginAuth = $('#loginAuth');

loginAuth.on('click', (e) => {
  e.preventDefault();
  require.ensure([], function() { // this syntax is weird but it works
      require('./login/login');
  });
})
console.log(registerAuth)
