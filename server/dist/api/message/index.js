/**
 * Created by xiaokekeT on 15/8/15.
 */
'use strict';

var _bluebird = require('bluebird');

Object.defineProperty(exports, '__esModule', {
	value: true
});

var show = _bluebird.coroutine(function* (next) {
	this.status = 200;
	var userId = this.params.id;
	var data = yield newsService.watchs(userId);
	this.body = (0, _mateApi.successForamt)({
		code: 1002,
		data: data
	});
});

exports.show = show;

var _mateApi = require('../../mate/api');

var _app$service = app.service;
var userService = _app$service.userService;
var newsService = _app$service.newsService;