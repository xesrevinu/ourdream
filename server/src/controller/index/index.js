import {
  User
}
from '../../model'
let index = {
  index: {
    get: function*() {
      this.state.title = '首页'
      let user
      if(this.logind){
         user = yield User.findId(this.session.user._id)
      }
      yield this.render('index',{
        user:user
      })
    }
  }
}
export default index