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

var db = _monk2['default']('localhost/ourdream');

var Model = (function () {
  function Model() {
    _classCallCheck(this, Model);

    this.db = db;
    this.getCollection = function (cname) {
      return warp(this.db.get(cname));
    };
  }

  _createClass(Model, null, [{
    key: 'validModel',
    value: function validModel(newObjct, checkFrom) {
      for (var i in newObjct) {}
      return true;
    }
  }]);

  return Model;
})();

exports['default'] = Model;
module.exports = exports['default'];