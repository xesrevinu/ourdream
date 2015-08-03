import _ from 'lodash'
import {
	User
}
	from './model'

(async function () {
	let user = await User.find().exec()
	if (!_.isNull(user) || count < 0) {
		return
	}
	console.log('loa test data start')

	let newUser = new User({
		email: 'test@qq.com',
		password: 'test',
		name: 'test'
	})
	await newUser.save()

	console.log('load test data done')
})()
