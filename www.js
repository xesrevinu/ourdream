//发布,采用config/config-server-{NODE_ENV}.js作为配置
//process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'test';

const config = require('./config/config');
const app = require('./server/app');

const info = `server start,listen port:${config.listenPort},NODE_DEV:${config.DEV}`;

app.listen(config.listenPort,function (){
	console.log(info);
})