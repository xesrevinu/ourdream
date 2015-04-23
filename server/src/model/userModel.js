import Model from './'
const checkForm = {
  name: String
}
class User extends Model {
  constructor(newUser) {
    super()
    this.collection = this.getCollection('users')
  }
  static valid(newUser) {
    return this.validModel(newUser, checkForm)
  }
}

export default User