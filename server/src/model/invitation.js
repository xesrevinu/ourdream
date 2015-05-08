import co from 'co'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

/**
 * 邀请函模板
 * @type {Schema}
 */
const Invitation = Schema({
  // 名字
  name: {
    type: String,
    required: true,
    unique: true
  },
  // 类型
  type: {
    type: String,
    required: true
  },
  /* 属性
  property: {

  }*/
  // 发布
  public: {
    type: Boolean,
    default: true
  },
  // 简介
  description: {
    type: String,
    default: ''
  },
  // 封面
  cover: {
    type: String,
    required: false
  },
  // 级别
  level: {
    type: Number,
    default: 0
  },
  // 创建时间
  createtime: {
    type: Date,
    default: Date.now
  },
  // 更新时间
  updatetime: {
    type: Date,
    default: Date.now
  },
  template: {
    type:String,
    required:true
  }
}, {
  safe: true,
  collection: 'invitation',
  toJSON: {
    transform: function(doc, ret, options) {},
  },
})
Invitation.pre('save', function(done) {
  done()
});

Invitation.statics = {

}
Invitation.methods = {

}
export default mongoose.model('Invitations', Invitation)