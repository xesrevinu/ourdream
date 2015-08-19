import co from 'co'
import mongoose from 'mongoose'
import {
  bcrypt
} from '../utils'
const Schema = mongoose.Schema;

const User = Schema({
  email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, default: '' },
	phone: { type: String, default: '' },
	active: { type: Boolean, default: false },
	watchs:{ type: Array, default: [] },
	aboutme:{ type: Array, default: [] },
	sex: { type: String,  default: 'man' },
	head: { type: String, default:'' },
	level: { type: Number, default: 0 },
	role: { type: Number,  min: 0,  max: 3, default: 0 },
	createtime: { type: Date,  default: Date.now() }
}, {
  safe: true,
  collection: 'users',
  toJSON: {
    transform: function(doc, ret, options) {
      delete ret.password;
    },
  },
})
/**
 * 查找用户是否存在
 * @param  {String} email 邮箱地址
 * @return {Promise}       用户数
 */
User.statics.exist = function(email) {
  return this.findOne({
	  email: email
  }).exec()
}
/**
  * 根据email查找用户资料
  * @param  {String} email 邮箱地址
  * @return {Object}       用户资料
  */
User.statics.findUser = function(email) {
  return this.findOne({
    email: email
  }, {
    /*salt:0,
    hash:0,
    */
    __v:0
  }).exec()
}
/**
 * 查找用户验证信息
 * @param  {String} email 邮箱地址
 * @return {Object}       验证信息
 */
User.statics.findAuth = function(email){
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
/**
 * 登录验证
 * @param {String} email         邮箱地址
 * @param {String} password      密码
 */
User.statics.verifyPassword = function *(email, password){
  const user =
    yield this.findOne({
      email: email
    }).exec();
  if (!user) {
    throw {
      error:new Error('用户不存在'),
      origin:'email'
    }
  }
  // 对比密码返回Boolean
  if (
	  yield user.comparePassword(password)) {
    return user;
  }
  throw {
    error:new Error('密码不正确'),
    origin:'password'
  }
}
/**
 * 对比密码
 * @param  {String} candidatePassword  被验证密码
 * @return {Boolean}                   是否相同
 */
User.methods.comparePassword = function(candidatePassword){
  return bcrypt.compare(candidatePassword, this.password);
}

export default mongoose.model('Users', User)