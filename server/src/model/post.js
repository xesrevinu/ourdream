import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Card = Schema({
  // 标题
  title: {
    type: String,
  },
  // 发布者
  name: {
    type: String
  },
  // 结婚 生子 or .....
  type: {
    type: String,
    required: true
  },
  // 地点
  site: {
    type: String,
    required: true
  },
  // 简介
  description: {
    type: String,
    required: true
  },
  // 创建时间
  createtime: {
    type: Date,
    required: false,
    default: Date.now()
  },
  // 开始时间
  starttime: {
    type: Date,
    required: true
  },
  // 结束时间
  stoptime: {
    type: Date,
    required: true
  },
  // 模板
  template: {
    type: String,
    require: false,
    default: 'default'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  safe: true,
  collection: 'Posts'
})

export default mongoose.model('Posts', Card)