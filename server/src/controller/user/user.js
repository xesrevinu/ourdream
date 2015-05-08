import {
  User
} from '../../model'
export default {
  show: function*() {
    const id = this.params.email;
    yield this.render('user')
  }
}