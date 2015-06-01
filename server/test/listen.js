/**
 * Created by xiaokekeT on 15/5/31.
 */
var Server = require('../dist/server');
describe('listen app', function () {
	it('listen port 3000', function (done) {
		var app = new Server();
		app.start(done)
	})
});
describe('route test ', function () {
	it('/ in path', function () {
	})
});