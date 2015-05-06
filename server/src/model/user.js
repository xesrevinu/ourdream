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
  nicename: {
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
    type: String,
    default:''
  },
  description: {
    type: String,
    default:''
  },
  qq: {
    type: String,
    default:''
  },
  weibo: {
    type: String,
    default:''
  },
  weixin: {
    type: String
    default:''
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

User.statics = {
  exist: function(email) {
    return this.find({
      email: email
    }).count().exec()
  },
  findId: function(id) {
    return this.findOne({
      _id: id
    }).exec()
  },
  findAuth: function(email) {
    return this.findOne({
      email: email
    }, {
      _id: 1,
      password: 1,
      email: 1,
      level: 1,
      active: 1,
    }).exec()
  }
}
User.methods = {

}
export default mongoose.model('Users', User)