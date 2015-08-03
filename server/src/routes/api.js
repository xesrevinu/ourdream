export default (router, api, middle) => {

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
  router.get('/api/news/:id',api.news.index.show)
  router.post('/api/news',api.news.index.post)
  router.put('/api/news/:id',api.news.index.put)
  router.delete('/api/news/:id',api.news.index.delete)

  /**
   * 验证API
   *
   **/
  //登录
   router.post('/api/login', api.auth.index.login.post)

  //注册
   router.post('/api/register', api.auth.index.register.post)

  return router
}
