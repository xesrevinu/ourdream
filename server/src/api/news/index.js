import _ from 'lodash'
let {
	TeamService,
	NewsService
} = app.service

let News = {}
News.get = function*() {
	let show = this.query.show
	let data
	switch (show) {
		case 'now':
			data = yield NewsService.getNews()
			break
		case 'star':
			data = yield NewsService.bestWeek()
			break
		default:
			data = yield NewsService.getList()
	}
	this.body = data
	return
}
News.show = function* () {
	let {id} = this.params.id
	let data;
	try {
		data = yield NewsService.getNew(id)
	} catch (e) {
		logger.error(e)
		this.body = {
			error: '获取信息失败',
			msg: '',
			data: null
		}
		return
	}
	if (!data) {
		this.body = {
			error: '',
			msg: '信息不存在',
			data: null
		}
		return
	}
	this.body = {
		error: '',
		msg: '获取信息成功',
		data: data
	}
	return
}
News.post = function*() {
	//body = {
	//  name:'',
	//  leveal:'',
	//  creator:'',
	//  content:'',
	//}
	let body = this.request.body
	let data = yield NewsService.create(body)
	this.body = data
}
News.put = function*() {

}
News.delete = function*() {

}
export default News
