const { User } = require('../model/user');
const bcrypt = require('bcrypt');
// const { response } = require('express');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    // res.send('测试')
    if (email.trim().length == 0 || password.trim().length == 0) return res.send('邮件地址或者密码为空');
    let user = await User.findOne({email});
    if (user) {
        // console.log(user);
        let isValue = await bcrypt.compare(password, user.password)
        if(isValue) {
            // console.log(user.role)
			// 将用户角色存储在session对象中
            // console.log(123)
            // res.cookie("username", user.username)
            req.session.username = user.username
            // console.log(req.session);
            req.session.role = user.role
            req.app.locals.userId = user._id
			// res.send('登录成功');
            // console.log(req.session)
            // console.log(req.session)
            res.json({role: user.role})
        }
        else res.send({msg: '邮箱地址或者密码错误'})
    }
    else {
        res.send({msg: '邮箱地址或者密码错误'})
    }
    // res.send('123')
}