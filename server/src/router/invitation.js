export default (route, middle, ctrl) => {
  route('/invitation/:tplId')
    .get(ctrl.index.show)
}