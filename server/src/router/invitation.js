export default (route, middle, ctrl) => {
  route('/invitation/:tplId')
    .get(ctrl.index.show)
  route('/invitation/:tplId/source')
    .get(ctrl.source.show)
}