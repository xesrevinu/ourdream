'use strict'
var fs = require('fs'),
	_ = require('lodash'),
	util = require('util'),
	path = require('path'),
	logger = require('tracer');

var config = require('../../config/config');

/**
 * [getRouter 读取路由文件]
 * @param  {[String]}
 * @return {[object]}
 */
module.exports = function(route, render) {
	/**
	 * 加载控制器
	 * @param  {string} ctrlPath controller路径
	 * @return {Array}           路由表
	 */
	function loadCtrl(ctrlPath,injectModules) {
		var ctrls = fs.readdirSync(ctrlPath);
		var routers = [];
		var _path ;
		_.forEach(ctrls, function(name) {
			name = name.replace(/\.\w+$/, '').toLowerCase();
			if(name === ""){
				return 
			}
			name === 'index'? _path = '/' : _path = '/' + name;
			var filePath = '../Controller' + _path;
			
			console.log(filePath)
			try {
				require(filePath)(route(_path), render, injectModules)
				routers.push(_path)
			} catch (e) {
				logger.colorConsole().error(filePath + '加载失败,只能加载js哦少年!,'+e)

			}
		})

		return routers
	}

	var Data = require('../Data');
	var ctrlPath = config.ctrlPath;
	var router = loadCtrl(ctrlPath,{
		Data:Data
	});

	/*function addParams(url) {
		return function(params) {
			if (_.isString(params && params.substring(0, 2) == '/:')) {
				return route(url + params)
			}
		}
	}*/

	return function*(next) {
		/**
		 * 获得根路由
		 * http://localhost:3000/asd/asd -> /asd
		 */
		var url = this.originalUrl.toLowerCase();
		var rootPath = url.match(/^\/\w*/)[0];

		if (router.indexOf(rootPath) === -1) {
			this.status = 404;
			this.body = render(404) || '404';
		}
	}
};