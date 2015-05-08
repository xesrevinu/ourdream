export default (route, middle, ctrl) => {
  route('/user/:email')
    .get(middle.auth.isAuthed,ctrl.user.show)
}