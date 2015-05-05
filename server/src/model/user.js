import mongoose from 'mongoose'
import PostModel from './post'
const Schema = mongoose.Schema
  /**
   * 用户模型
   * @type {Schema}
   * email 必须
   * password 必须
   */
const User = Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    tyep: String,
    default: ''
  },
  phone: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    default: 'man'
  },
  company: {
    type: String
  },
  description: {
    type: String
  },
  qq: {
    type: String
  },
  weibo: {
    type: String
  },
  weixin: {
    type: String
  },
  cover: {
    type: String,
    required: false
  },
  level: {
    type: Number,
    default: 0
  },
  released: {
    type: [PostModel.Schema],
    default: []
  },
  aboutme: {
    type: [PostModel.Schema],
    default: []
  },
  // 权限
  role: {
    type: Number,
    required: true,
    unique: false,
    min: 0,
    max: 3,
    default: 0
  },
  //创建时间
  createtime: {
    type: Date,
    required: true,
    default: Date.now()
  }
}, {
  safe: true,
  collection: 'users'
})

// User.statics = {
//   newUser: function() {
//     console.log(123)
//   }
// }
// User.methods = {
//   save: function*(callback) {
//     yield this.db.model('Users').create(this, callback)
//   }
// }
export default mongoose.model('Users', User)