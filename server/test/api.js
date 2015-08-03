/**
 * Created by xiaokekeT on 15/6/27.
 */
var request = require('supertest')
var Server = require('../dist/server')
var app = new Server()
describe('Teams Api', function () {
	it('Get /teams in path ,获取团队列表', function (done) {
		request(app.listen())
			.get('/api/teams')
			.end(done);
	})
	it('Get /api/teams/:id in path ,获取id团队信息', function (done) {
		var id = '558f7bfff317d8856068f526'
		request(app.listen())
			.get('/api/teams/'+id)
			.end(function(err,data){
				if(err){}
				data.body.data["_id"].should.be.exactly(id)
				done()
			});
	})
	it('Post /api/teams in path ,创建一个团队',function(done){
		var body = {
			name:'Test ',
			description:'test team'
		}
		request(app.listen())
		.post('/api/teams')
		.send(body)
		.end(done)
	})
});
