'use strict';

var _bluebird = require('bluebird');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _model = require('./model');

_bluebird.coroutine(function* () {
  var user = yield _model.User.find().exec();
  if (!_lodash2['default'].isNull(user) || count < 0) {
    return;
  }
  console.log('loa test data start');

  var newUser = new _model.User({
    email: 'test@qq.com',
    password: 'test',
    name: 'test'
  });
  yield newUser.save();

  console.log('load test data done');
})();