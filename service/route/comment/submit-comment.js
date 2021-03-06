// 将评论集合构造函数进行导入
const { Comment } = require('../../model/comment'); 

module.exports = async (req, res) => {
	// 接收客户端传递过来的请求参数
	const { comment, articleId } = req.body;

	// 将评论信息存储到评论集合中
	await Comment.create({
		content: comment,
		// uid: uid,
		aid: articleId,
		time: new Date()
	});

	console.log(req.body);
    return res.send('sucess')
	// 将页面重定向回文章详情页面
}