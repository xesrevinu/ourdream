/**
 * Created by xiaokekeT on 15/6/27.
 */
const {
  teamService
} = app.service

let teams = {}
//获得team列表
teams.get = function*() {
    let {
      page
    } = this.query
    let data = yield teamService.getTeamList(page)
    this.body = data
    return
  }
  //获得team信息
teams.show = function*() {
    let {
      id
    } = this.params
    let data;
    try {
      data = yield teamService.getTeam(id)
    } catch (e) {
      logger.error(e)
      this.body = {
        error: '获取团队信息失败',
        msg: '',
        data: null
      }
      return
    }
    if (!data) {
      this.body = {
        error: '',
        msg: '团队不存在',
        data: null
      }
      return
    }
    this.body = {
      error: '',
      msg: '获取团队信息成功',
      data: data
    }
    return
  }
  //创建team
teams.post = function*() {
    let {
      name,
      description,
      cover
    } = this.request.body
    let body = {
      name: name,
      description: description,
      cover: cover
    }
		let data = yield teamService.createTeam(body)
    this.body = data
    return
  }
  //修改tema资料
teams.put = function*() {
    let {
      teamId
    } = this.request.body
    let data = yield teamService.updateTeam(teamId)
    this.body = data
    return
  }
  //删除team
teams.delete = function*() {
  let {
    teamId
  } = this.request.body
  let data = yield teamService.deleteTeam(teamId)
  this.body = data
  return
}

export default teams
