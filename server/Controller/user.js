'use strict'
module.exports = function(router, render, modules) {
	/**
	 * path -> /user
	 */
	var Data = modules.Data;
	var User = new Data('User');

	User.find({}, function(err, data) {
		console.log(err, data)
	})

	router
		.get(function*() {
			this.body = 'user'
		})
		.post(function* _() {

		})

	router
		.nested('/123/3123')
		.get(function*() {
			this.body = 123;
		})

	router
		.nested('/profile/:id')
		.get(function*() {
			this.body = this.request.params.id
		})

	router
		.nested('/register')
		.get(function*() {
			this.body =
				yield render('register')
		})
		.post(function*() {
			var NewUser = new User(this.request.body)
			NewUser.save(function(err) {
				if (!err) {
					this.body = 'register ok'
				}
			});

		})
}