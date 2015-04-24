import Model from './'

class User extends Model {
  constructor(newUser) {
    super()
  }
  static findUser(uid) {
    var user = this.getCollection('users')
    return function*() {
      return yield user.find({
        uid: uid
      })
    }

  }
}

export default User