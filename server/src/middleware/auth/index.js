export default {
  isAuthed: function *(next) {
    if(this.isAuthenticated()){
        yield next
    }else{
        this.redirect('/login')
    }
  },
  isLogined: function *(next){
     if(this.passport.user) {
        this.state.user = this.passport.user
        yield next
     } else {
        yield next
     }
  }
}