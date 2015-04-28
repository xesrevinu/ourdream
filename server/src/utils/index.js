import uuid from 'uuid'

export default {
  createUid() {
      let uid = uuid.v1()
        // return uid.substring(0, 10).replace(/[a-z,-]/g, parseInt(Math.random() * 9))
      return uuid
    },
    markMd5() {

    }
}