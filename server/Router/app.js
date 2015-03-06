var fs = require('fs'),
	_ = require('lodash');
module.exports = function(route, render) {
	var ctrlPath = config.serverPath + '/Controller';
	var ctrl = fs.readdirSync(ctrlPath);

	_.forEach(ctrl, function(file) {
		require('../Controller/'+file).call(this, route, render)
	});
	return function*(next) {
		if (ctrl.indexOf(this.originalUrl) == -1) {
			this.status = 400;
			this.body = yield render('404');
		}
	}
};