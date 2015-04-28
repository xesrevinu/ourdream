export default (route, middleware, controller) => {

  route('/api/user/:uid')
    .get(controller.user.get)
  route('/api/user/:uid/posts')
    .get(controller.posts.get)
  route('/api/users')
    .get(controller.users.get)
}