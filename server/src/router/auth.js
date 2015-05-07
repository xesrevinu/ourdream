export default (route,middle,ctrl)=>{
  route('/login')
    .get(ctrl.login.show)
    .post(ctrl.login.login)

  route('/register')
    .get(ctrl.register.show)
    .post(ctrl.register.register)

  route('/logout')
    .get(ctrl.login.logout)
}