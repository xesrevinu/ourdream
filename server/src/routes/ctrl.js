export default (router, ctrl, middle) => {
	/*
	 * 路由
	 *
	 * */
	//首页
	router.get('/', ctrl.index.get)

	return router
}
