export default (route, middleware, controller) => {
  route('/find')
    .get(controller.send)
}