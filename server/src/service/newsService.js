import moment from 'moment'

const {
	teamModel,
	newsModel,
	userModel
} = app.model


let NewsService = {}
NewsService.getList = function*() {
	let data = yield teamModel.find({}).sort({}).limit(100).exec()
	return data
}
NewsService.bestWeek = function*() {
	let lassWeek = moment().subtract(7, 'days').format()
	let now = moment().subtract(5, 'Minute').format()
	let data
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
	}).exec()
	return data
}
NewsService.getNews = function*() {
	let data = yield teamModel.find({}).sort({
		"createdAt": -1
	}).limit(100).exec()
	return data
}
NewsService.getNew = function*(newId) {
	let data = yield teamModel.findById(newId).exec()
	return data
}
NewsService.getCategory = function*() {
	let data = yield teamModel.find({}).limit(100).exec()
	let _data = {}
	for (var i = 0; i < data.length; i++) {
		_data[data[i].name] = data
	}
	return _data
}
NewsService.create = async function (body){
	let news = new newsModel(body)
	return await news.save()
}
export default NewsService

export async function getAA(){

}

export async function watchs(userId){
	//获取关注列表
	let { watchs } = await userModel.findOne({_id:userId}).exec()

	let data = []
	for(let i of watchs){
		let teamId = i.teamId
		let teamNews = await newsModel.find({creatorTeam:teamId}).exec()
		if(teamNews.length>1){
			let name = teamNews[0].name
			data.push({
				name:name,
				messages:teamNews
			})
		}
		//for(let news of teamNews){
		//	data.push(news)
		//}
	}
	return data
}