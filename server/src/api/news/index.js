import _ from 'lodash'
let {
	teamService,
	newsService
} = app.service

let News = {}
//News.get = function*() {
//	let id = this.params.id
//	//let watchs =
//}
News.get = function*() {
	let show = this.query.show
	let data
	switch (show) {
		case 'now':
			data = yield newsService.getNews()
			break
		case 'star':
			data = yield newsService.bestWeek()
			break
		default:
			data = yield newsService.getList()
	}
	this.body = data
	return
}
News.show = async()=>{
	let {id} = this.params.id
	let data;
	try {
		data = await newsService.getNew(id)
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
News.post = async function(){
	let data = this.request.body
	console.log(data)
	let a = await newsService.create(data)
	console.log(a)
	this.body = 'ok'
}
News.put = function*() {

}
News.delete = function*() {

}
export default News
