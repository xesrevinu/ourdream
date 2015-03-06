module.exports = function(route, render) {
	route('/')
		.get(function*() {
			console.log(this);
			this.body =
				yield render('index')
		})

	route('/user')
		.post(function*() {
			return 
		})
}