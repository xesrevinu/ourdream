export default (route, middle, ctrl) => {
  route('/')
    .get(ctrl.index.get)
}