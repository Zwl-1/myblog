// 导入用户集合构造函数
const { Article } = require('../../model/article')
module.exports = async (req, res) => {
	// 接收客户端传递过来的当前页参数
	let page = req.query.page || 1;
	console.log(page);
	// 每一页显示的数据条数
	let pagesize = 10;
	// 查询用户数据的总数
	let count = await Article.countDocuments({});
	// 总页数
	let total = Math.ceil(count / pagesize);

	// 页码对应的数据查询开始位置
	let start = (page - 1) * pagesize; 

	// 将用户信息从数据库中查询出来
	let article = await Article.find({}).limit(pagesize).skip(start)
	// 渲染用户列表模块
    res.send({
        article: article,
        total: total
    })
}