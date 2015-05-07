export default {
  logout: function*() {
    this.logout();
    this.session = null;
    this.status = 204;
    this.body = {
      success:true,
      info:'退出成功',
      status:1
    }
  }
}