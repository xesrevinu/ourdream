export default (app) => {
  app.use(function*(next) {
    this.set('Access-Control-Allow-Origin', 'http://localhost')
    this.set('Access-Control-Allow-Credentials', true)
    this.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
    this.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')

    if (this.method === 'OPTIONS') {
      this.status = 200
      return
    }

    yield next
  })

  return function*(next) {
    yield next
  }
}