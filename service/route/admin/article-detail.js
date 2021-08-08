// 导入用户集合构造函数
const { Article } = require('../../model/article')
module.exports = async (req, res) => {

	// 接收客户端传递过来的当前页参数
	let id = req.query.id ;
	let article = await Article.findOne({"_id":id})
	// 渲染用户列表模块
	// console.log('123678')
	// console.log(req.session)
	// const mess = req.header()
	// console.log(mess)
    res.send({
        article: article
    })
	// res.render('admin/user', {
	// 	users: users,
	// 	page: page,
	// 	total: total
	// });
}