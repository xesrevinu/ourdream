export default (route, middle, ctrl) => {
  route('/api/valid')
    .get(ctrl.index.valid)
  route('/api/invitation')
    .get(ctrl.invitation.show)
}