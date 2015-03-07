var fs = require('fs'),
	_ = require('lodash'),
	logger = require('tracer');

// 路由
function getRouter (ctrlPath){
	var router = {}
	var _ctrls = fs.readdirSync(ctrlPath);

	_.forEach(_ctrls,function (name){
		name = name.replace(/\.\w+$/,'').toLowerCase();
		if(name==='index'){
			router['/'] = name;	
		}
		router['/'+name] = name;
	})
	return router
}

module.exports = function(route, render) {
	var ctrlPath = config.serverPath + '/Controller/';
	var router = getRouter(ctrlPath);

	_.forEach(router,function (ctrl,path){
		try{
			require(`../Controller/${ctrl}`)(route(path),render)
		}catch(e){
			logger.colorConsole().error(`Controller/${file} 加载失败,只能加载js哦少年!`)
		}
	})

	return function*(next) {
		var url = this.originalUrl.toLowerCase();
		// 获得根路由 
		// /asd/asd -> /asd 
		var root = url.match(/^\/\w*/)[0];
		
		if(!router[root]){
			this.status = 400;
			this.body = yield render('404');	
		}
	}
};