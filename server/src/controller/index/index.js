let index = {
  index: {
    get: function*() {
      this.state.title = '首页'
      yield this.render('index')
    }
  }
}
export default index