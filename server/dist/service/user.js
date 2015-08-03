'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _model = require('../model');

exports['default'] = {
  createUser: function* createUser(user) {
    var exist = yield _model.User.exist(user.email);
    if (exist) {
      throw '此email已被注册';
    }
    var newUser = undefined;
    try {
      newUser = new _model.User(user);
    } catch (e) {
      throw '注册失败';
    }
    return yield newUser.save();
  },
  login: function login(self) {}
};
module.exports = exports['default'];