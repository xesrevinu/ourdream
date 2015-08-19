'use strict';

var _bluebird = require('bluebird');

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _app$service = app.service;
var teamService = _app$service.teamService;
var newsService = _app$service.newsService;

var News = {};
//News.get = function*() {
//	let id = this.params.id
//	//let watchs =
//}
News.get = function* () {
	var show = this.query.show;
	var data = undefined;
	switch (show) {
		case 'now':
			data = yield newsService.getNews();
			break;
		case 'star':
			data = yield newsService.bestWeek();
			break;
		default:
			data = yield newsService.getList();
	}
	this.body = data;
	return;
};
News.show = _bluebird.coroutine(function* () {
	var id = undefined.params.id.id;

	var data = undefined;
	try {
		data = yield newsService.getNew(id);
	} catch (e) {
		logger.error(e);
		undefined.body = {
			error: '获取信息失败',
			msg: '',
			data: null
		};
		return;
	}
	if (!data) {
		undefined.body = {
			error: '',
			msg: '信息不存在',
			data: null
		};
		return;
	}
	undefined.body = {
		error: '',
		msg: '获取信息成功',
		data: data
	};
	return;
});
News.post = _bluebird.coroutine(function* () {
	var data = this.request.body;
	console.log(data);
	var a = yield newsService.create(data);
	console.log(a);
	this.body = 'ok';
});
News.put = function* () {};
News['delete'] = function* () {};
exports['default'] = News;
module.exports = exports['default'];