import redis from '../../redis/connection'
import { getToken } from '../../utils/index'

//从redis查找token
function *verifyToken(next){
	let jwt = getToken(this.header)
	try {
		let token = yield redis.get(jwt)
		if(token){
			return this.status = 401
		}
		yield next
	}catch(e){
		this.status = 500
	}
}
let expireToken = function(headers) {
	var token = getToken(headers);

	if (token != null) {
		redis.set(token, { is_expired: true });
		redis.expire(token, 60 * 60);
	}
};
export default { verifyToken, expireToken }
