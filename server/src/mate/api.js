/**
 * Created by xiaokekeT on 15/8/8.
 */
let errorForamt = ({ code ,errors=[], status=422 }) => {
	return {
		"code": code,
		"status": status, //用户校验错误
		"message": "validate failed",
		"errors": [...errors]
	}
}

let successForamt = ({ code, data={}, status=200 }) => {
	return {
		"code": code,
		"status": status,
		"message": "ok",
		"data": data
	}
}
export default { errorForamt, successForamt }