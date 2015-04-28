import Model from './'
import _ from 'lodash'
import utils from '../utils'

const user = Model.use('Users')

class User extends Model {
  constructor(newUser) {
    super()
    this.collection = user
    this.model = {
      email: newUser.email,
      password: newUser.password
    }
    return this
  }
  static findUserInfo(uid) {
    const self = this
    return function*() {
      /*if (data) {
        return sendData(data)
      }*/
      return yield self.collection.findOne({
        uid: uid
      })
    }
  }
  static emailExist(email) {
    const self = this
    var ok = false
    return function*() {
      const exist =
        yield self.collection.count({
          email: email
        })
      if (exist) {
        ok = !ok
      }
      return yield [ok]
    }
  }
  save() {
    this.model.uid = utils.createUid()
    return super.save(this.model)
  }
}

export default User