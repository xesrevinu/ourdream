/**
 * Created by xiaokekeT on 15/6/27.
 */
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import { errorForamt as error , successForamt as success } from '../../mate/api'
import moment from 'moment'
let {
	userService
} = app.service

let login = {
	post: function*() {
		let {user, pass} = this.request.body
		if (!user || !pass) {
			this.body = error({
				code: "0001",
				errors: ["user is empty", "password is empty"],
				status: 422
			})
			return
		}
		let auth = yield userService.getAuth(user)
		//帐号不存在
		if (_.isEmpty(auth)) {
			this.body = error({
				code: "0001",
				errors: ['用户不存在'],
				status: 422
			})
			return
		}
		let userData = yield userService.getInfo(user)
		//建一个token给客户端，客户端存入本地，decode解开获得数据
		//验证时，客户端取到 token 放入 header,服务器verif验证 token
		let token = jwt.sign({
			user: userData,
		}, 'key',{
			issuer:user._id,
			expiresInMinutes:60
		})
		this.body = success({
			code: "0002",
			status: 200,
			data: {
				token
			}
		})
		return
	}
}
let register = {
	post: function*() {
		let body = this.request.body
		let user
		try {
			user = yield UserService.createUser(body)
		} catch (e) {
			console.log(e)
		}
		this.body = user
	}
}
let token = {
	valid: async function(){
		this.body ='ok'
	}
}
import { getToken } from '../../utils/index'
import redis from '../../redis/connection'
async function logout(){
	var token = getToken(this.header);

	if (token != null) {
		redis.set(token, { is_expired: true });
		redis.expire(token, 60*60);
	}
	this.body = 'ok'
}
export default { login, register, token, logout }