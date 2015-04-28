export default (app) => {

  app.use(function*(next) {

  })
  return function*(next) {
    yield next
  }
}