export default (route, middleware, controller) => {
  route('/api/user/valid')
    //.get(controller.user.valid)
  route('/api/user/:uid')
    .get(controller.user.sendInfo)
  route('/api/user/:uid/posts')
    .get(controller.user.sendUserPost)
}