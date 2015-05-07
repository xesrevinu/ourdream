export default (route, middle, ctrl) => {
  route('/find')
    .get(ctrl.find.get)
}