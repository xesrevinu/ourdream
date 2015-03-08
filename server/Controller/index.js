'use strict'
module.exports = function(route, render,modules) {
	route
	.get(function *(){
		this.body = yield render('index');
	})
	.post(function *(){
		this.body = JSON.stringify(this.request);
	})
}