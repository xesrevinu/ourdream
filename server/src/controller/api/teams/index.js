/**
 * Created by xiaokekeT on 15/6/27.
 */
const {
	TeamService
} = app.service
let teams = {}
//获得team列表
teams.get = function *() {
	let {
		page
	} = this.query
	let data = yield TeamService.getTeamList(page)

	this.body = data
}
//获得team信息
teams.show = function*() {
	let {
		teamId
	} = this.request.body
	let data = yield TeamService.getTeam(teamId)
	this.body = data
}
//创建team
teams.post = function*() {
	let{
		name,
		description,
		cover
	} = this.request.body
	let body = {
		name:name,
		description:description,
		cover:cover
	}
	let data = yield TeamService.createTeam(body)
	this.body = data
}
//修改tema资料
teams.put = function*() {
	let {
		teamId
	} = this.request.body
	let data = yield TeamService.updateTeam(teamId)
	this.body = data
}
//删除team
teams.delete = function*() {
	let {
		teamId
	} = this.request.body
	let data = yield TeamService.deleteTeam(teamId)
	this.body = data
}

export default teams
