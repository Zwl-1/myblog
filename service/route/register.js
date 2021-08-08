// 引入用户集合的构造函数
const { User, validateUser } = require('../model/user');
// 引入加密模块
const bcrypt = require('bcrypt');
const date = require('joi/lib/types/date');

module.exports = async (req, res, next) => {
    req.body.role = 'normal';
    req.body.state = 0; 
	// console.log(req.cookie);
	// console.log(req.body);
	try {
		await validateUser(req.body)
	}catch (e) {
		// 验证没有通过
		// e.message
		// 重定向回用户添加页面
		return res.send({msg: e.message})
	}

	// 根据邮箱地址查询用户是否存在
	let user = await User.findOne({email: req.body.email});
	// 如果用户已经存在 邮箱地址已经被别人占用
	if (user) {
		// 重定向回用户添加页面
		// return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);
		return res.send({msg: '邮箱地址已经被占用'})
	}
	// 对密码进行加密处理
	// 生成随机字符串
	const salt = await bcrypt.genSalt(10);
	// 加密
	const password = await bcrypt.hash(req.body.password, salt);
	// 替换密码
	req.body.password = password;
	// 将用户信息添加到数据库中
	await User.create(req.body);
	// 将页面重定向到用户列表页面
	// req.session.username = req.body.username;
	// console.log(req)
	res.send({successful: 'register'})
    // res.send({msg: '123'})
}