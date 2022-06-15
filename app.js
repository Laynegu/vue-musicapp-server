//开启网站服务
const express = require('express');
const path = require('path');
const router = require('./router/router');

const app = express();

//开启数据库
// require('./model/connect');

//配置post请求参数解析
// app.use(bodyParser.urlencoded({extend: false}));
// app.use(bodyParser.json());

//配置静态资源文件
app.use('/public', express.static(path.join(__dirname, 'public')));

// 拦截所有请求
app.use((req, res, next) => {
	// 1.允许哪些客户端访问我
	// * 代表允许所有的客户端访问我
	res.header('Access-Control-Allow-Origin', '*')
	// 2.允许客户端使用哪些请求方法访问我
	res.header('Access-Control-Allow-Methods', 'get,post')
	next();
});

//挂载路由
app.use('/api', router);

app.listen(3000, () => {
	console.log('服务器启动成功...');
})