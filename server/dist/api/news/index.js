'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _app$service = app.service;
var TeamService = _app$service.TeamService;
var NewsService = _app$service.NewsService;

var News = {};
News.get = function* () {
	var show = this.query.show;
	var data = undefined;
	switch (show) {
		case 'now':
			data = yield NewsService.getNews();
			break;
		case 'star':
			data = yield NewsService.bestWeek();
			break;
		default:
			data = yield NewsService.getList();
	}
	this.body = data;
	return;
};
News.show = function* () {
	var id = this.params.id.id;

	var data = undefined;
	try {
		data = yield NewsService.getNew(id);
	} catch (e) {
		logger.error(e);
		this.body = {
			error: '获取信息失败',
			msg: '',
			data: null
		};
		return;
	}
	if (!data) {
		this.body = {
			error: '',
			msg: '信息不存在',
			data: null
		};
		return;
	}
	this.body = {
		error: '',
		msg: '获取信息成功',
		data: data
	};
	return;
};
News.post = function* () {
	//body = {
	//  name:'',
	//  leveal:'',
	//  creator:'',
	//  content:'',
	//}
	var body = this.request.body;
	var data = yield NewsService.create(body);
	this.body = data;
};
News.put = function* () {};
News['delete'] = function* () {};
exports['default'] = News;
module.exports = exports['default'];