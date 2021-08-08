const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
// const cookie = require('cookie-parser')
require('./model/connect')
// console.log(process.env);
//解决跨域问题
const app = express();
// 拦截请求 判断用户登录状态
app.use(session({
	secret: 'secret key',
  resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	}
}));
// app.use(cookie());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // res.header('Access-Control-Allow-Headers', '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Credentials", true)
    next();
  });
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// app.use('/', require('./middleware/loginGuard'))
app.use(express.static('public'))
app.post('/login', require('./route/login'))

app.post('/register', require('./route/register'))
app.post('/userEdit', require('./route/admin/userEdit'))
app.get('/useradmin', require('./route/admin/userPage'))
app.post('/upload-image',require('./route/admin/upload-image'))
// app.use('/useradmin',require('./middleware/loginGuard'))
app.post('/article-add',require('./route/admin/article-add'))
app.post('/search',require('./route/article/find-article'))
app.get('/label', require('./route/label/label-list'))
app.get('/home', require('./route/admin/article-list'))
app.get('/detail', require('./route/admin/article-detail'))
app.get('/get-comment', require('./route/comment/get-comment'))
app.post('/submit-comment', require('./route/comment/submit-comment'))
app.listen(80);
console.log('已经创建服务器');
