export default (route, middle, ctrl) => {

  route('/api/user/:uid')
    .get(ctrl.user.get)
  route('/api/user/:uid/posts')
    .get(ctrl.users.get)
  route('/api/users')
    .get(ctrl.users.get)
}