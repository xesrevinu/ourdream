export default (app, ctrl, middle) => {
	/*
	 * 路由
	 *
	 * */
	//首页
	app.get('/', ctrl.index.get)

}