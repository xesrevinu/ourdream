export default (route, middleware, controller) => {
  route('/user')
    .get(controller.sendUser)
  route('/user/register')
    .get(controller.sendRegister)
    .post(middleware.user.checkUserModel, middleware.user.register, controller.registerSuccess)
}