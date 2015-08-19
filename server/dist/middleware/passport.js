'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _passportLocal = require('passport-local');

var _model = require('../model');

exports['default'] = function (app) {
  app.use(_koaPassport2['default'].initialize());
  app.use(_koaPassport2['default'].session());
  _koaPassport2['default'].serializeUser(function (user, done) {
    done(null, user._id);
  });
  _koaPassport2['default'].deserializeUser(function (id, done) {
    _model.User.findById(id, {
      password: 0
    }, done);
  });
  _koaPassport2['default'].use(new _passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function (username, password, done) {
    co(function* () {
      return yield _model.User.verifyPassword(username, password);
    }).then(function (user) {
      done(null, user);
    })['catch'](function (err) {
      done(null, false, err);
    });
  }));
};

module.exports = exports['default'];