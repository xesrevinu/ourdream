/**
 * Created by xiaokekeT on 15/8/8.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var errorForamt = function errorForamt(_ref) {
	var code = _ref.code;
	var _ref$errors = _ref.errors;
	var errors = _ref$errors === undefined ? [] : _ref$errors;
	var _ref$status = _ref.status;
	var status = _ref$status === undefined ? 422 : _ref$status;

	return {
		"code": code,
		"status": status, //用户校验错误
		"message": "validate failed",
		"errors": [].concat(_toConsumableArray(errors))
	};
};

var successForamt = function successForamt(_ref2) {
	var code = _ref2.code;
	var _ref2$data = _ref2.data;
	var data = _ref2$data === undefined ? {} : _ref2$data;
	var _ref2$status = _ref2.status;
	var status = _ref2$status === undefined ? 200 : _ref2$status;

	return {
		"code": code,
		"status": status,
		"message": "ok",
		"data": data
	};
};
exports["default"] = { errorForamt: errorForamt, successForamt: successForamt };
module.exports = exports["default"];