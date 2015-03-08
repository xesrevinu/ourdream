'use strict'
var root = process.cwd();
module.exports = {
	root: root,
	listenPort: 3000,
	template: "html",
	mongo: {
		host: "mongodb://localhost/",
		database: "ourdream",
		user: "",
		pass: ""
	},
	redis: {
		host: "localhost",
		port: 6379,
		db: "",
		pass: ""
	},
	serverPath :root+"/server",
	ctrlPath:root+"/server/Controller",
	appPath:root+"/app",
	staticPath: root+"/app/static/",
	viewsPath:  root+"/app/views/",
	templates: "html",//swig
};