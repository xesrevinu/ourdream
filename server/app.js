var koa = require('koa'),
	app = koa();

app.use(function*() {
	this.body = "Hello world"
})

module.exports = app;