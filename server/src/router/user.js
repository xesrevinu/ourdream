export default (route, middle, ctrl) => {
  route('/user')
    .get(ctrl.user.get)
}