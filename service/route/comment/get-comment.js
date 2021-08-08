const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {

	// 接收客户端传递过来的当前页参数
	let id = req.query.id ;
	let comment = await Comment.find({'aid': id})
	// 渲染用户列表模块
	// console.log('123678')
	// console.log(req.session)
	// const mess = req.header()
	// console.log(mess)
    res.send({
        comment: comment
    })
	// res.render('admin/user', {
	// 	users: users,
	// 	page: page,
	// 	total: total
	// });
}