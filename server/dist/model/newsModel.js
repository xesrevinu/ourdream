'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../utils');

var Schema = _mongoose2['default'].Schema;

var News = Schema({
  //属于那个Team
  teamId: {
    type: String
  },
  //Team名
  name: {
    type: String
  },
  // 0-普通,1-重要,2-紧急
  leveal: {
    type: Number,
    'default': 0
  },
  //发布者Id
  creator: {
    type: String
  },
  //内容
  content: {
    type: String
  },
  createdAt: {
    type: Date,
    'default': Date.now
  },
  views: {
    type: Number,
    'default': 1
  },
  star: {
    type: Number,
    'default': 0
  }
}, {
  safe: true,
  collection: 'news'
});

News.statics = {};
News.methods = {};
exports['default'] = _mongoose2['default'].model('News', News);
module.exports = exports['default'];