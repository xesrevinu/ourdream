import {
  User
} from '../../model'
const index = {
  show: function*() {
    return yield this.render('invitation')
  }
}
export default {
  index: index
}