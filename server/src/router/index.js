export default (route, middleware, controller) => {
  route('/')
    .get(controller.index.get)
}