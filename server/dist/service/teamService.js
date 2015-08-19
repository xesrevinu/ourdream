"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _app$model = app.model;
var userModel = _app$model.userModel;
var teamModel = _app$model.teamModel;
exports["default"] = {
  getTeamList: function* getTeamList() {
    var pageIndex = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var pageSize = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
    var sortParam = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    pageIndex = pageIndex < 1 ? 1 : parseInt(pageIndex);
    var count = yield teamModel.count().exec();
    //总页数
    var total = 1;
    if (count >= pageSize) {
      total = Math.ceil(count / pageSize);
    }
    var start = pageIndex == 0 ? 0 : (pageIndex - 1) * pageSize;
    var data = yield teamModel.find().sort(sortParam).skip(start).limit(pageSize).exec();
    var next = pageIndex;
    var previous = pageIndex;
    next++;
    previous--;
    //是否为第一页
    if (pageIndex === 1) {
      previous = null;
    }
    //是否超过总页
    if (pageIndex > total - 1) {
      next = null;
      //previous = total--
    }
    return {
      data: data,
      //页数
      total: total,
      //下一页编号
      next: next,
      //上一页编号
      previous: previous,
      //当前页
      pageIndex: pageIndex,
      //数据长度
      dataLength: data.length,
      //团队个数
      count: count
    };
  },
  getTeam: function* getTeam(teamId) {
    var data = yield teamModel.findById(teamId).exec();
    return data;
  },
  createTeam: function* createTeam(body) {
    body.creator = "554c263adf78ff141dd84693";
    var team = undefined,
        data = undefined;
    try {
      team = new teamModel(body);
      data = yield team.save();
    } catch (e) {
      console.log(e);
    }
    return data;
  },
  updateTeam: function* updateTeam(teamId, diff) {
    var query = {
      "_id": teamId
    };
    return yield teamModel.update(query, diff).exec();
  },
  deleteTeam: function* deleteTeam(teamId) {
    var query = {
      "_id": teamId
    };
    return yield teamModel.remove(query).exec();
  }
};
module.exports = exports["default"];