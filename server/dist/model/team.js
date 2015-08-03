/**
 * Created by xiaokekeT on 15/6/27.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _utils = require('../utils');

var Schema = _mongoose2['default'].Schema;

var Team = Schema({
	name: {
		type: String,
		required: true,
		index: true
	},
	description: {
		type: String,
		'default': 'Good Team',
		required: true
	},
	cover: {
		type: String
	},
	watchers: {
		type: [_user2['default'].schema]
	},
	members: {
		type: [_user2['default'].schema]
	},
	type: {
		type: String
	},
	//关注数
	follow: {
		type: Number,
		'default': 0
	},
	//关注那些人
	follows: {
		type: [_user2['default'].schema]
	},
	//粉丝数
	fans: {
		type: Number,
		'default': 0
	},
	//粉丝列表
	fansList: {
		type: [_user2['default'].schema]
	},
	//发布的消息数量
	message: {
		type: Number,
		'default': 0
	},
	creator: {
		type: String
	},
	createdAt: {
		type: Date,
		'default': Date.now
	}
}, {
	safe: true,
	collection: 'teams'
});

Team.pre('save', function (done) {
	this.members.push(this.creator);
	return done();
});

Team.statics = {};
Team.methods = {};
exports['default'] = _mongoose2['default'].model('Teams', Team);
module.exports = exports['default'];