export default (app) => {
  require('./passport')(app)
  require('./helper')(app)
  return function*(next) {
    //this.set('Access-Control-Allow-Origin', 'http://localhost')
    //this.set('Access-Control-Allow-Credentials', true)
    //this.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    //this.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
    
    yield next
  }
}
