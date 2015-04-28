import monk from 'monk'
import wrap from 'co-monk'
import redisClient from '../redis'
import {
  markMd5
}
from '../utils'
const db = monk('localhost/ourdream');

class Model {
  constructor() {
      this.db = db
    }
    /**
     * 获得collection
     * @param  {String}
     * @return {Collection}
     */
  save() {
    const self = this
    return function*() {
      return yield self.collection.insert(self.model)
    }
  }
  static use(collection) {
    this.collection = wrap(db.get(collection))
    return this.collection
  }
  static get(id) {
    //const _id = markMd5(id)
    return {
      id: id,
      a: 1000
    }
  }
  static set(id) {

  }
  static del(id) {

  }
}

export default Model