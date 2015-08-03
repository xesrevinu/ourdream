'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _utils = require('../utils');

var Schema = _mongoose2['default'].Schema;

var User = Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  nicename: {
    tyep: String
  },
  phone: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    'default': false
  },
  password: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    'default': 'man'
  },
  description: {
    type: String,
    'default': ''
  },
  qq: {
    type: String,
    'default': ''
  },
  weibo: {
    type: String,
    'default': ''
  },
  weixin: {
    type: String,
    'default': ''
  },
  head: {
    type: String,
    required: false
  },
  level: {
    type: Number,
    'default': 0
  },
  // 权限
  role: {
    type: Number,
    required: true,
    unique: false,
    min: 0,
    max: 3,
    'default': 0
  },
  //创建时间
  createtime: {
    type: Date,
    required: true,
    'default': Date.now()
  }
}, {
  safe: true,
  collection: 'users',
  toJSON: {
    transform: function transform(doc, ret, options) {
      delete ret.password;
    }
  }
});
User.pre('save', function (done) {
  // 密码是否被修改或者新值
  if (!this.isModified('password')) {
    return done();
  }
  _co2['default'].wrap(function* () {
    try {
      var salt = yield _utils.bcrypt.genSalt();
      var hash = yield _utils.bcrypt.hash(this.password, salt);
      this.password = hash;
      done();
    } catch (err) {
      done(err);
    }
  }).call(this).then(done);
});
/**
 * 查找用户是否存在
 * @param  {String} email 邮箱地址
 * @return {Number}       用户数
 */
User.statics.exist = function (email) {
  return this.count({
    email: email
  }).exec();
};
/**
  * 根据email查找用户资料
  * @param  {String} email 邮箱地址
  * @return {Object}       用户资料
  */
User.statics.findUser = function (email) {
  return this.findOne({
    email: email
  }, {
    /*salt:0,
    hash:0,
    */
    __v: 0
  }).exec();
};
/**
 * 查找用户验证信息
 * @param  {String} email 邮箱地址
 * @return {Object}       验证信息
 */
User.statics.findAuth = function (email) {
  return this.findOne({
    email: email
  }, {
    _id: 1,
    password: 1,
    email: 1,
    level: 1,
    active: 1
  }).exec();
};
/**
 * 登录验证
 * @param {String} email         邮箱地址
 * @param {String} password      密码
 * @yield {[type]} [description]
 */
User.statics.verifyPassword = function* (email, password) {
  var user = yield this.findOne({
    email: email
  }).exec();
  if (!user) {
    throw {
      error: new Error('用户不存在'),
      origin: 'email'
    };
  }
  // 对比密码返回Boolean
  if (yield user.comparePassword(password)) {
    return user;
  }
  throw {
    error: new Error('密码不正确'),
    origin: 'password'
  };
};
/**
 * 对比密码
 * @param  {String} candidatePassword  被验证密码
 * @return {Boolean}                   是否相同
 */
User.methods.comparePassword = function (candidatePassword) {
  return _utils.bcrypt.compare(candidatePassword, this.password);
};

exports['default'] = _mongoose2['default'].model('Users', User);
module.exports = exports['default'];