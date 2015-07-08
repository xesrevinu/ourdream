import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import middleware from '../middleware/index'

//const spaRoutes = ['/register','/about','/login']
const ctrlPath = path.resolve(__dirname, '../controller')
const ctrlFile = fs.readdirSync(ctrlPath)
let ctrls = {}
ctrlFile.forEach(name => {
	let stats = fs.statSync(`${ctrlPath}/${name}`)
	if (stats.isDirectory()) {
		ctrls[name] = `../controller/${name}`
	}
})

export default (app) => {
	const middle = middleware(app)

	let publishRouter = (file, main = 'index') => {
		let ctrl = require(`${ctrls[file]}/${main}`)
		return require(`./${file}`)(app, ctrl, middle)
	}

	//发布路由
	publishRouter('api')
	publishRouter('static')

	//spa router
	//app.use(function*(next) {
	//	let spaPath = spaRoutes.indexOf(this.url)
	//	if(spaPath==-1){
	//		yield next
	//	}
	//	let Redirectrouting = spaRoutes[spaPath]
	//	return this.redirect(`/#${Redirectrouting}`)
	//});

	// 404 Error handle
	app.use(function*(next) {
		if (app.env === 'development') {
			this.status = 500
			this.body = `<h2 style="text-align:centermargin-top:20%">未定义的路由=>${this.url}</h2>`
			return
		}
		this.type = 'text/html'
		this.status = 404
		yield this.render('404')
	})
}
