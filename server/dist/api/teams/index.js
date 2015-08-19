/**
 * Created by xiaokekeT on 15/6/27.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var teamService = app.service.teamService;

var teams = {};
//获得team列表
teams.get = function* () {
  var page = this.query.page;

  var data = yield teamService.getTeamList(page);
  this.body = data;
  return;
};
//获得team信息
teams.show = function* () {
  var id = this.params.id;

  var data = undefined;
  try {
    data = yield teamService.getTeam(id);
  } catch (e) {
    logger.error(e);
    this.body = {
      error: '获取团队信息失败',
      msg: '',
      data: null
    };
    return;
  }
  if (!data) {
    this.body = {
      error: '',
      msg: '团队不存在',
      data: null
    };
    return;
  }
  this.body = {
    error: '',
    msg: '获取团队信息成功',
    data: data
  };
  return;
};
//创建team
teams.post = function* () {
  var _request$body = this.request.body;
  var name = _request$body.name;
  var description = _request$body.description;
  var cover = _request$body.cover;

  var body = {
    name: name,
    description: description,
    cover: cover
  };
  var data = yield teamService.createTeam(body);
  this.body = data;
  return;
};
//修改tema资料
teams.put = function* () {
  var teamId = this.request.body.teamId;

  var data = yield teamService.updateTeam(teamId);
  this.body = data;
  return;
};
//删除team
teams['delete'] = function* () {
  var teamId = this.request.body.teamId;

  var data = yield teamService.deleteTeam(teamId);
  this.body = data;
  return;
};

exports['default'] = teams;
module.exports = exports['default'];