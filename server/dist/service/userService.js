"use strict";

var _bluebird = require("bluebird");

Object.defineProperty(exports, "__esModule", {
	value: true
});
var userModel = app.model.userModel;
exports["default"] = {
	createUser: function* createUser(user) {
		//let { email } = user
		//let exist = yield User.exist(email)
		//if (exist) {
		// throw  '此email已被注册'
		//}
		//let newUser
		//try {
		// newUser = new User(user)
		//} catch (e) {
		// console.log(e)
		// throw '注册失败'
		//}
		//let _ = yield newUser.save()
		//return _
		return yield new userModel({
			email: "121441909",
			password: '12323'
		}).save();
	},
	getInfo: function* getInfo(email) {
		var user = yield userModel.findUser(email);
		return user;
	},
	getAuth: function* getAuth(email) {
		var auth = yield userModel.findAuth(email);
		if (!auth || auth.length == 0) {
			return {};
		}
		return auth;
	},
	getWatchList: _bluebird.coroutine(function* (userId) {
		var watchList = yield userModel.find({ _id: userId }, {
			watchs: 1
		}).exec();
		return watchList;
	})
};
module.exports = exports["default"];