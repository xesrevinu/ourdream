'use strict'
module.exports = function(router, render, modules) {
	router
		.get(function*() {
			this.body =
				yield render('index');
		})
}