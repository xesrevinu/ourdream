export default (route, middleware, controller) => {
  route('/user')
    .get(controller.send)
  route('/user/login')
    .get(middleware.auth.isLoginBack, controller.sendLogin)
    .post(middleware.auth.isLoginBack)

  route('/user/register')
    .get(controller.sendRegister)
    .post(middleware.user.checkUserModel, middleware.user.register, controller.registerSuccess)

  route('/user/logout')
    .get(middleware.auth.isLogin, controller.logout)
}