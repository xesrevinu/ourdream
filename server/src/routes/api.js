export default (app, api, middle) => {

	//获取token
	app.get('/api/token', api.auth.getToken)

	/*
	 * Team 团队API
	 *
	 * */
	//获取team列表
	app.get('/api/teams', api.team.get)
	//获取team详细
	app.get('/api/teams/:id', api.team.show)
	//创建team
	app.post('/api/teams', api.team.post)
	//更新team
	app.put('/api/teams/:id', api.team.put)
	//删除team
	app.delete('/api/teams/:id', api.team.delete)

	/**
	 *  News 消息API
	 */
	app.get('/api/news',api.news.get)
	app.post('/api/news',api.news.post)

	/**
	 * 验证API
	 *
	 * */
	//登录
	app.route('/api/auth/login')
		.post(api.auth.login.post)
	//注册
	app.route('/api/auth/register')
		.post(api.auth.register.post)
}
