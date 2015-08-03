/**
 * Created by xiaokekeT on 15/6/27.
 */


let auths = {}
auths.login = {
	post: function*() {
		this.body ='ok'
	}
}
auths.register = {
	post: function*() {
		this.body ='ok'
	}
}
auths.token = {
	get: function*() {

	},
	post: function*() {

	},
	delete: function*() {

	}
}


export default auths