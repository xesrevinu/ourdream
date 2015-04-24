import monk from 'monk'
import wrap from 'co-monk'
import redisClient from '../redis'
const db = monk('localhost/ourdream');

class Model {
  constructor() {
    this.db = db
  }
  static getCollection(cname) {
    return wrap(db.get(cname))
  }
  static get(id, callback) {
    redisClient.hget(id, callback)
  }
  static set(id, callback) {
    redisClient.hset(id, callback)
  }
}

export default Model