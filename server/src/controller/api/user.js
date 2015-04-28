export default {
  /*
    /api/user/:uid
  */
  get: function*() {
    this.body = this.params.uid
  }
}