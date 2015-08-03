import moment from 'moment'

const {
	Team,
	NewsModel
	} = app.model

let NewsService = {}
NewsService.getList = function*() {
	let data = yield NewsModel.find({}).sort({}).limit(100).exec()
	return data
}
NewsService.bestWeek = function*() {
	let lassWeek = moment().subtract(7, 'days').format()
	let now = moment().subtract(5, 'Minute').format()
	let data
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
	}).exec()
	return data
}
NewsService.getNews = function*() {
	let data = yield NewsModel.find({}).sort({
		"createdAt": -1
	}).limit(100).exec()
	return data
}
NewsService.getNew = function*(newId) {
	let data = yield NewsModel.findById(newId).exec()
	return data
}
NewsService.getCategory = function*() {
	let data = yield NewsModel.find({}).limit(100).exec()
	let _data = {}
	for (var i = 0; i < data.length; i++) {
		_data[data[i].name] = data
	}
	return _data
}
NewsService.create = function*(body) {
	let data, news
	try {
		news = new NewsModel(body)
		data = news.save()
	} catch (e) {
		console.log(e)
	}
	return data
}
export default NewsService
