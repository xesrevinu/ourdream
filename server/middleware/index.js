var swig = require('swig'),
    views = require('co-views'),
    flash = require('koa-flash'),
    logger = require('koa-logger'),
    routing = require('koa-routing'),
    session = require('koa-session'),
    validate = require('koa-validate'),
    bodyparser = require('koa-bodyparser'),
    mongooseStore = require('koa-session-mongoose');

module.exports = function(app, config) {
    middleware = require('./middleware')(app);
    if (config.production) {
        app.enable('view cache');
        app.enable('cache');
        app.enable('minification');
    };
    app.use(logger());
    app.use(bodyparser());
    app.use(session({
        store: mongooseStore.create(),
        cookie: {
            maxAge: 24 * 60 * 60 * 3000 //3 day
        },
        secret: config.secret,
        resave: true,
        saveUninitialized: true
    }, app));
    app.use(flash());
    app.use(validate());
    app.use(routing(app));
    app.render = views(config.viewsPath, {
        default: config.templates,
        cache: config.viewCache,
        map: {
            html: "swig"
        }
    });
    return middleware;
}