export default (route, middleware, controller) => {

  route('/user')
    .get(controller.user.get)

  route('/login')
    .get(controller.login.get)
    .post(middleware.auth.isLogin, controller.login.post)

  route('/register')
    .get(controller.register.get)
    .post(middleware.user.checkModel, controller.register.post)

  route('/logout')
    .get(controller.login.logout)
}