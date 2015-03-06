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
	staticPath: root+"/app/static/",
	viewsPath:  root+"/app/views/",
	template: "html"
};