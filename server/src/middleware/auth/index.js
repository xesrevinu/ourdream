export default {
  isAuthenticated: function*(next) {
    if(this.isAuthenticated()){
      next()
    }
    this.redirect('back')
    yield next
  }
}