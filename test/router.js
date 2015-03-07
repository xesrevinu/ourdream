var mocha = require('mocha'),
	should = require('should'),
	supertest = require('supertest');
var koa = require('../server/app');
describe('路由', function() {
	it('index', function(done) {
		var app = koa.listen()
		supertest(app)
			.get('/')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200, done)
	})
	it('404', function(done) {
		var app = koa.listen()
		supertest(app)
			.get('/404' + Math.random() * 100)
			.expect(404, done)
	})
})