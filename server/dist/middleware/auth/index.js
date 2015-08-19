'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redisConnection = require('../../redis/connection');

var _redisConnection2 = _interopRequireDefault(_redisConnection);

var _utilsIndex = require('../../utils/index');

//从redis查找token
function* verifyToken(next) {
	var jwt = (0, _utilsIndex.getToken)(this.header);
	try {
		var token = yield _redisConnection2['default'].get(jwt);
		if (token) {
			return this.status = 401;
		}
		yield next;
	} catch (e) {
		this.status = 500;
	}
}
var expireToken = function expireToken(headers) {
	var token = (0, _utilsIndex.getToken)(headers);

	if (token != null) {
		_redisConnection2['default'].set(token, { is_expired: true });
		_redisConnection2['default'].expire(token, 60 * 60);
	}
};
exports['default'] = { verifyToken: verifyToken, expireToken: expireToken };
module.exports = exports['default'];