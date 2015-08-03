'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

exports['default'] = {
  createUid: function createUid() {
    var uid = _uuid2['default'].v1();
    // return uid.substring(0, 10).replace(/[a-z,-]/g, parseInt(Math.random() * 9))
    return _uuid2['default'];
  },
  bcrypt: {
    compare: function compare(data, hash) {
      return new Promise(function (resolve, reject) {
        _bcrypt2['default'].compare(data, hash, function (err, matched) {
          if (err) {
            return reject(err);
          }
          return resolve(matched);
        });
      });
    },
    hash: function hash(data, salt) {
      return new Promise(function (resolve, reject) {
        _bcrypt2['default'].hash(data, salt, function (err, hash) {
          if (err) {
            return reject(err);
          }
          return resolve(hash);
        });
      });
    },
    genSalt: function genSalt(rounds, ignore) {
      return new Promise(function (resolve, reject) {
        _bcrypt2['default'].genSalt(rounds, ignore, function (err, salt) {
          if (err) {
            return reject(err);
          }
          return resolve(salt);
        });
      });
    },
    getRounds: _bcrypt2['default'].getRounds,
    genSaltSync: _bcrypt2['default'].genSaltSync,
    hashSync: _bcrypt2['default'].hashSync,
    compareSync: _bcrypt2['default'].compareSync
  }
};
module.exports = exports['default'];