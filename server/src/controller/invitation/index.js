import {
  User
}
from '../../model'
const index = {
  show: function*() {
    this.state.title = '选择模板';
    this.state.tpl = {
      _id: this.params.tplId
    }
    return yield this.render('invitation')
  },
}
export default {
  index: index,
  source:require('./source')
}