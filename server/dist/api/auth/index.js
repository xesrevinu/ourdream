/**
 * Created by xiaokekeT on 15/6/27.
 */
'use strict';

var _bluebird = require('bluebird');

Object.defineProperty(exports, '__esModule', {
	value: true
});

var logout = _bluebird.coroutine(function* () {
	var token = (0, _utilsIndex.getToken)(this.header);

	if (token != null) {
		_redisConnection2['default'].set(token, { is_expired: true });
		_redisConnection2['default'].expire(token, 60 * 60);
	}
	this.body = 'ok';
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mateApi = require('../../mate/api');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utilsIndex = require('../../utils/index');

var _redisConnection = require('../../redis/connection');

var _redisConnection2 = _interopRequireDefault(_redisConnection);

var userService = app.service.userService;

var login = {
	post: function* post() {
		var _request$body = this.request.body;
		var user = _request$body.user;
		var pass = _request$body.pass;

		if (!user || !pass) {
			this.body = (0, _mateApi.errorForamt)({
				code: "0001",
				errors: ["user is empty", "password is empty"],
				status: 422
			});
			return;
		}
		var auth = yield userService.getAuth(user);
		//帐号不存在
		if (_lodash2['default'].isEmpty(auth)) {
			this.body = (0, _mateApi.errorForamt)({
				code: "0001",
				errors: ['用户不存在'],
				status: 422
			});
			return;
		}
		var userData = yield userService.getInfo(user);
		//建一个token给客户端，客户端存入本地，decode解开获得数据
		//验证时，客户端取到 token 放入 header,服务器verif验证 token
		var token = _jsonwebtoken2['default'].sign({
			user: userData
		}, 'key', {
			issuer: user._id,
			expiresInMinutes: 60
		});
		this.body = (0, _mateApi.successForamt)({
			code: "0002",
			status: 200,
			data: {
				token: token
			}
		});
		return;
	}
};
var register = {
	post: function* post() {
		var body = this.request.body;
		var user = undefined;
		try {
			user = yield UserService.createUser(body);
		} catch (e) {
			console.log(e);
		}
		this.body = user;
	}
};
var token = {
	valid: _bluebird.coroutine(function* () {
		this.body = 'ok';
	})
};
exports['default'] = { login: login, register: register, token: token, logout: logout };
module.exports = exports['default'];