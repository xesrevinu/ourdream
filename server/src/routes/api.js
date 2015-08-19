import jwt from 'koa-jwt'
export default (router, api, middle, app) => {

	router.use(function*(next) {
		this.type = "json"
		yield next
	})
	
	/*
	 * Team 团队API
	 *
	 * */
	//获取team列表
	router.get('/api/teams', api.teams.index.get)
	//获取team详细
	router.get('/api/teams/:id', api.teams.index.show)
	//router.use('/api/teams/',jwt({secret:'AAABBB',audience: 'http://myapi/protected',issuer: 'http://issuer'}) )
	//创建team
	router.post('/api/teams', api.teams.index.post)
	//更新team
	router.put('/api/teams/:id', api.teams.index.put)
	//删除team
	router.delete('/api/teams/:id', api.teams.index.delete)

	/**
	 *  News 消息API
	 **/
	router.get('/api/news', api.news.index.get)
	router.get('/api/news/:id', api.news.index.show)
	router.post('/api/news', api.news.index.post)
	router.put('/api/news/:id', api.news.index.put)
	router.delete('/api/news/:id', api.news.index.delete)

	/**
	 * Message
	 **/
	router.get('/api/message/:id',api.message.index.show)

	/**
	 * 验证API
	 *
	 **/
	//登录
	router.post('/api/login', api.auth.index.login.post)
	//验证jwt
	router.get('/api/valid',middle.auth.verifyToken, api.auth.index.token.valid)
	router.get('/api/logout', api.auth.index.logout)
	//注册
	router.post('/api/register', api.auth.index.register.post)

	return router
}
