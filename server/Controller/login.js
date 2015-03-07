module.exports = function(route, render) {
	route.get(function *(){
		this.body = yield render('login')
	})
}