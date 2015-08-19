'use strict';

var _bluebird = require('bluebird');

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (app) {
  require('./helper')(app);
  return _bluebird.coroutine(function* (next) {
    console.log('this is last middleware');
    yield next;
  });
};

module.exports = exports['default'];