import monk from 'monk'
import wrap from 'co-monk'
import redisClient from '../redis'
const db = monk('localhost/ourdream');

class Model {
  constructor() {
      this.db = db
      this.model = {}
    }
    /**
     * 获得collection
     * @param  {String}
     * @return {Collection}
     */
  static use(collection) {
    this.collection = wrap(db.get(collection))
    return this.collection
  }
  save() {
    const self = this
    return function*() {
      return yield self.collection.insert(self.model)
    }
  }
}

export default Model