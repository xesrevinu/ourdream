import {
  User,
  Invitation
} from '../../model'
export default {
  show: function*() {
    this.body = yield Invitation.find({
      public:true
    }).exec()
  }
}