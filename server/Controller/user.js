'use strict'
var Thunk = require('thunks')();
module.exports = function(router, render, models) {
	/**
	 * path -> /user
	 */
	var UserData = models.Dao.User;

	/*Model.User.cache.select(1)(function*(error, res) {
		console.log(error, res);

		yield this.set('foo', 'bar');
		yield this.set('bar', 'baz');

		console.log('foo -> %s',
			yield this.get('foo'));
		console.log('bar -> %s',
			yield this.get('bar'));

		var user = {
			id: 'u001',
			name: 'jay',
			age: 24
		};
		// transaction, it is different from node_redis!
		yield [
			this.multi(),
			this.set(user.id, JSON.stringify(user)),
			this.zadd('userAge', user.age, user.id),
			this.pfadd('ageLog', user.age),
			this.exec()
		];
		yield this.set('asd','asdasd')
		console.log(yield this.get('asd') +'====')
		return this.quit();
	})(function(error, res) {
		console.log(error, res);
	});*/

	router
		.get(function*() {
			this.body = 123;
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
			UserData.findUserName(this.request.params.id,function (){
				console.log(arguments)
			});
			this.body = 123
		})

	router
		.nested('/register')
		.get(function*() {
			this.body =
				yield render('register')
		})
		.post(function*() {
			var NewUser = new Model.User(this.request.body)
			NewUser.save(function(err) {
				if (!err) {
					this.body = 'register ok'
				}
			});

		})
}