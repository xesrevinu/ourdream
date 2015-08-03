/**
 * Created by xiaokekeT on 15/6/27.
 */

'use strict';

exports.__esModule = true;
var auths = {};
auths.login = {
	post: function* post() {
		this.body = 'ok';
	}
};
auths.register = {
	post: function* post() {
		this.body = 'ok';
	}
};
auths.token = {
	get: function* get() {},
	post: function* post() {},
	'delete': function* _delete() {}
};

exports['default'] = auths;
module.exports = exports['default'];