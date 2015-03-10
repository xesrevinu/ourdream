'use strict'
var koa = require('koa'),
	swig = require('swig'),
	views = require('co-views'),
	flash = require('koa-flash'),
	logger = require('koa-logger'),
	routing = require('koa-routing'),
	session = require('koa-session'),
	validate = require('koa-validate'),
	bodyparser = require('koa-bodyparser'),
	mongooseStore = require('koa-session-mongoose');

var app = koa(),
	config = require('../config/config');

app.use(logger());
app.use(bodyparser());
app.use(session({
	store: mongooseStore.create(),
	cookie: {
		maxAge: 24 * 60 * 60 * 3000 //3 day
	}
}, app));
app.use(flash());
app.use(validate());
app.use(routing(app));
app.render = views(config.viewsPath, {
	default: config.templates,
	//cache: 'memory',
	map: {
		html: "swig"
	}
});
app.use(require('./Router/app')(app.route, app.render));
app.on('error', function(error) {
	logger.colorConsole().err(error);
});

module.exports = app;