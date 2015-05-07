import co from 'co'
import mongoose from 'mongoose'
import PostModel from './post'
import {
  bcrypt
}
from '../utils'
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
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  qq: {
    type: String,
    default: ''
  },
  weibo: {
    type: String,
    default: ''
  },
  weixin: {
    type: String,
    default: ''
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
  collection: 'users',
  toJSON: {
    transform: function(doc, ret, options) {
      delete ret.password;
    },
  },
})
User.pre("save", function (done) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    return done();
  }

  co.wrap(function*() {
    try {
      var salt = yield bcrypt.genSalt();
      var hash = yield bcrypt.hash(this.password, salt);
      this.password = hash;
      done();
    }
    catch (err) {
      done(err);
    }
  }).call(this).then(done);
});


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
  },
  verifyPassword: function*(email, password) {
    const user = yield this.findOne({email: email}).exec();
    if (!user) {
      throw new Error('User not found');
    }
    if (yield user.comparePassword(password)) {
      return user;
    }
    throw new Error('Password does not match')
  }
}
User.methods = {
  comparePassword: function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  }
}
export default mongoose.model('Users', User)