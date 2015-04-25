export default (route, middleware, controller) => {
  route('/user')
    .get(controller.send)

  route('/user/login')
    .get(controller.loginSuccess)

  route('/user/register')
    .get(controller.sendRegister)
    .post(middleware.user.checkUserModel, middleware.user.register, controller.registerSuccess)
}