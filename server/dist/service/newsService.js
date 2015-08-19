'use strict';

var _bluebird = require('bluebird');

Object.defineProperty(exports, '__esModule', {
	value: true
});

var getAA = _bluebird.coroutine(function* () {});

exports.getAA = getAA;

var watchs = _bluebird.coroutine(function* (userId) {
	//获取关注列表

	var _ref = yield userModel.findOne({ _id: userId }).exec();

	var watchs = _ref.watchs;

	var data = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = watchs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var i = _step.value;

			var teamId = i.teamId;
			var teamNews = yield newsModel.find({ creatorTeam: teamId }).exec();
			if (teamNews.length > 1) {
				var _name = teamNews[0].name;
				data.push({
					name: _name,
					messages: teamNews
				});
			}
			//for(let news of teamNews){
			//	data.push(news)
			//}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return data;
});

exports.watchs = watchs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _app$model = app.model;
var teamModel = _app$model.teamModel;
var newsModel = _app$model.newsModel;
var userModel = _app$model.userModel;

var NewsService = {};
NewsService.getList = function* () {
	var data = yield teamModel.find({}).sort({}).limit(100).exec();
	return data;
};
NewsService.bestWeek = function* () {
	var lassWeek = (0, _moment2['default'])().subtract(7, 'days').format();
	var now = (0, _moment2['default'])().subtract(5, 'Minute').format();
	var data = undefined;
	data = yield teamModel.find({
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
	var data = yield teamModel.find({}).sort({
		"createdAt": -1
	}).limit(100).exec();
	return data;
};
NewsService.getNew = function* (newId) {
	var data = yield teamModel.findById(newId).exec();
	return data;
};
NewsService.getCategory = function* () {
	var data = yield teamModel.find({}).limit(100).exec();
	var _data = {};
	for (var i = 0; i < data.length; i++) {
		_data[data[i].name] = data;
	}
	return _data;
};
NewsService.create = _bluebird.coroutine(function* (body) {
	var news = new newsModel(body);
	return yield news.save();
});
exports['default'] = NewsService;