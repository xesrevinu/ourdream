export default (route, middleware, controller) => {
  route('/user')
    .get(controller.user.sendUser)

  route('/user/register')
    .get(controller.user.sendRegister)
    .post(middleware.user.checkUserModel, middleware.user.register, controller.user.registerSuccess)
}