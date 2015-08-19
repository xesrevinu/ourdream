/**
 * Created by xiaokekeT on 15/8/15.
 */
const {
	userService,
	newsService
} = app.service
import { successForamt } from '../../mate/api'
export async function show(next){
	this.status = 200
	let userId = this.params.id
	let data = await newsService.watchs(userId)
	this.body = successForamt({
		code:1002,
		data:data
	})
}