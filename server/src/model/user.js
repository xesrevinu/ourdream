import mongoose from 'mongoose'
import PostSchema from './post'
const Schema = mongoose.Schema
const User = Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    tyep: String
  },
  phone: {
    type: String,
    required: true
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
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  released: {
    type: [PostSchema],
    default: []
  },
  aboutme: {
    type: [PostSchema],
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
    required: false,
    default: Date.now()
  }
}, {
  safe: true,
  collection: 'users'
})
export default User