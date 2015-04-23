import monk from 'monk'
import wrap from 'co-monk'

const db = monk('localhost/ourdream');

class Model {
  constructor() {
    this.db = db
    this.getCollection = function(cname) {
      return warp(this.db.get(cname))
    }
  }
  static validModel(newObjct, checkFrom) {
    for (let i in newObjct) {

    }
    return true
  }
}

export default Model