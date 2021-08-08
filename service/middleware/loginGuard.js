const guard = (req, res, next) => {
	// 判断用户的登录状态
	// 如果用户是登录的 将请求放行
	// 如果用户不是登录的 将请求重定向到登录页面
	console.log(req.session)
	// // console.log(req.cookie);
	if (!req.session.username) {
		console.log('no-login')
		// res.redirect('/login');
		next()
	} else {
	// 	// 如果用户是登录状态 并且是一个普通用户
		if (req.session.role == 'normal') {
	// 		// 让它跳转到博客首页 阻止程序向下执行
			console.log('login')
		}else if(req.session.role == 'admin') {
			console.log('admin')
		}
		// 用户是登录状态 将请求放行
		next();
	}
	// console.log(123124);
	// console.log(req.cookie)
	// console.log(req.session)
	// next()
}

module.exports = guard;