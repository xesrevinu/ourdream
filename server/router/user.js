export default (route, middleware, controller) => {
  route('/user')
    .get(controller.sendUser)

  route('/user/register')
    .get(controller.sendRegister)
    .post(middleware.checkUserModel, middleware.register, controller.registerSuccess)
}