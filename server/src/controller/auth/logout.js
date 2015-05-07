export default {
  logout: function*() {
    this.logout();
    this.session = null;
    this.status = 204;
  }
}