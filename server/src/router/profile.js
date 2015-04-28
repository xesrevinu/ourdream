export default (route, middleware, controller) => {
  route('/profile')
    .get(function*(next) {
      this.body = 'profile'
    })
}