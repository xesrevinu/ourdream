export default (route, middle, ctrl) => {
  route('/api/valid')
    .get(ctrl.index.valid)
  route('/api/invitation')
    .get(ctrl.invitation.show)
  route('/api/invitation/:tplId')
    .get(ctrl.invitation.select)
    .post(ctrl.invitation.save)
  route('/api/invitation/:tplId/publish')
    .post(ctrl.invitation.publish)
  route('/api/invitation/:tplId/buy')
    .get(ctrl.invitation.information)
    .post(ctrl.invitation.buy)
}