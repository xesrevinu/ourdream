/**
 * Created by xiaokekeT on 15/6/14.
 */

let index = {
	get:function*(){
		yield this.render('_index')
	}
}

/*let login = {}
login.get = function*() {
	yield this.render('login')
}
login.post = function*() {
	let status;
	try {
		status = yield UserService.login(this)
	} catch (e) {
		console.log(e)
	}
}*/

/*let register = {}
register.get = function*() {
	yield this.render('register')
}
register.post = function*() {
	let body = this.request.body
	let newUser;
	try {
		newUser = yield UserService.createUser(body)
	} catch (e) {
		this.status = 401;
		return this.body = {
			success: false,
			msg: e,
			data: null
		}
	}
	return this.body = {
		success: true,
		msg: '注册成功',
		data: newUser
	}
}*/

export default index
