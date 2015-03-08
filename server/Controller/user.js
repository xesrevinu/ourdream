'use strict'
module.exports = function(router, render,modules) {
	/**
	 * path -> /user
	 */
	var Data = modules.Data;
	var User = new Data('User');

	User.find({},function (err,data){
		console.log(err,data)
	})
	//console.log(new Data)
	router
		.get(function*() {
			this.body = 123123123
		})
	/**
	 * path -> /user/123/3123
	 */
	router
		.nested('/123/3123')
		.get(function*() {
			this.body = 123;
		})
	/**
	 * path -> /user/asd/:id/123/:last
	 */
	router
		.nested('/asd/:id/123/:last')
		.get(function*() {
			this.body = JSON.stringify(this.request.params)
		})
}