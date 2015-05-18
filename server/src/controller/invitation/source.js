import {
  User,
  Invitation
} from '../../model'
export default {
  show:function*(){
      yield this.render('share')
  }
}