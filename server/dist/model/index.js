'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _monk = require('monk');

var _monk2 = _interopRequireWildcard(_monk);

var _wrap = require('co-monk');

var _wrap2 = _interopRequireWildcard(_wrap);

var _redisClient = require('../redis');

var _redisClient2 = _interopRequireWildcard(_redisClient);

var db = _monk2['default']('localhost/ourdream');

var Model = (function () {
  function Model() {
    _classCallCheck(this, Model);

    this.db = db;
  }

  _createClass(Model, null, [{
    key: 'getCollection',
    value: function getCollection(cname) {
      return _wrap2['default'](db.get(cname));
    }
  }, {
    key: 'get',
    value: function get(id, callback) {
      _redisClient2['default'].hget(id, callback);
    }
  }, {
    key: 'set',
    value: function set(id, callback) {
      _redisClient2['default'].hset(id, callback);
    }
  }]);

  return Model;
})();

exports['default'] = Model;
module.exports = exports['default'];