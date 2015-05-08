export default {
  isAuthed: function *(next) {
    if(this.req.isAuthenticated()){
        yield next
    }else{
        this.redirect('/login')
    }
  },
  isLogined: function *(next){
     if(this.req.user) {
        this.state.user = this.req.user
        yield next
     } else {
        yield next
     }
  }
}