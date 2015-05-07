import {
  User
}
from '../../model'

export default {
  index: {
    get: function*() {
      this.state.title = '首页'
      yield this.render('index')
    }
  }
}