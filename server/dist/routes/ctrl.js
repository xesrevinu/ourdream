'use strict';

exports.__esModule = true;

exports['default'] = function (router, ctrl, middle) {
	/*
  * 路由
  *
  * */
	//首页
	router.get('/', ctrl.index.get);

	return router;
};

module.exports = exports['default'];