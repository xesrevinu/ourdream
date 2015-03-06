var fs = require('fs'),
	_ = require('lodash'),
	logger = require('tracer');
module.exports = function(route, render) {
	var ctrlPath = config.serverPath + '/Controller';
	var ctrl = fs.readdirSync(ctrlPath);

	_.forEach(ctrl, function(file) {
		try{
			require('../Controller/'+file).call(this, route, render)
		}catch(e){
			logger.colorConsole().error(`Controller/${file}加载失败,只能加载js哦少年`)
		}
	});
	return function*(next) {
		if (ctrl.indexOf(this.originalUrl) == -1) {
			this.status = 400;
			this.body = yield render('404');
		}
	}
};