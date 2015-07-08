export default (app) => {
  require('./passport')(app)
  require('./helper')(app)
  return function*(next) {
    //this.set('Access-Control-Allow-Origin', 'http://localhost')
    //this.set('Access-Control-Allow-Credentials', true)
    //this.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    //this.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
    if (/\/api\/\w/.test(this.url)) {
      //this.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization,X-Access-Token, X-Key')

    }
    if (this.method === 'OPTIONS') {
      this.status = 200
      return
    }
    yield next
  }
}
