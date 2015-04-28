export default {
  /*
    /api/user/:uid
  */
  sendInfo: function*() {
    this.body = this.params.uid
  },
  sendUserPost: function*() {
    this.body = this.params.uid
  }
}