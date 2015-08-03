'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _app$model = app.model;
var Team = _app$model.Team;
var NewsModel = _app$model.NewsModel;

var NewsService = {};
NewsService.getList = function* () {
	var data = yield NewsModel.find({}).sort({}).limit(100).exec();
	return data;
};
NewsService.bestWeek = function* () {
	var lassWeek = _moment2['default']().subtract(7, 'days').format();
	var now = _moment2['default']().subtract(5, 'Minute').format();
	var data = undefined;
	data = yield NewsModel.find({
		star: {
			$gte: 1
		}
		/** 获取7天前到现在的热门
   createdAt: {
      $gte: new Date(lassWeek).getTime()
    }
   **/
	}).sort({
		star: -1,
		createdAt: -1
	}).exec();
	return data;
};
NewsService.getNews = function* () {
	var data = yield NewsModel.find({}).sort({
		'createdAt': -1
	}).limit(100).exec();
	return data;
};
NewsService.getNew = function* (newId) {
	var data = yield NewsModel.findById(newId).exec();
	return data;
};
NewsService.getCategory = function* () {
	var data = yield NewsModel.find({}).limit(100).exec();
	var _data = {};
	for (var i = 0; i < data.length; i++) {
		_data[data[i].name] = data;
	}
	return _data;
};
NewsService.create = function* (body) {
	var data = undefined,
	    news = undefined;
	try {
		news = new NewsModel(body);
		data = news.save();
	} catch (e) {
		console.log(e);
	}
	return data;
};
exports['default'] = NewsService;
module.exports = exports['default'];