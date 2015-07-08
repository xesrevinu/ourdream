/**
 * Created by xiaokekeT on 15/5/31.
 */
var Server = require('../dist/server')

describe('listen app', function () {
	before(function(){
		this.app = new Server()
	})
	it('listen port 2333', function (done) {
		this.app.start(done())
	})
});
