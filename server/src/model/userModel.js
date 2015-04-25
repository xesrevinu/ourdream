import Model from './'
import _ from 'lodash'
import utils from '../utils'
const collection = Model.use('Users');
class User extends Model {
  constructor(newUser) {
    super()
    this.model = {
      uid: newUser.uuid,
      email: newUser.email,
      password: newUser.password
    }
    this.collection = collection
    return this
  }
  static findUser(uid) {
    const self = this
    return function*() {
      return yield self.collection.findOne({
        uid: uid
      })
    }
  }
  static emailExist(email) {
    const self = this
    var ok = true
    return function*() {
      for (let i = 0; i < 1000; i++) {
        yield self.collection.insert({
          uid: utils.createUid(),
          email: parseInt(Math.random() * 100000000) + '@qq.com',
          password: '123'
        })
      }
      const exist =
        yield self.collection.findOne({
          email: email
        })
      if (_.isEmpty(exist)) {
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