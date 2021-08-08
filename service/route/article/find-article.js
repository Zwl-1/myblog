// posts.find({post_text:{$regex:"runoob",$options:"$i"}})
const { Article } = require('../../model/article')
module.exports = async (req, res) => {
    //查询文章
	let page = req.body.page
	let findWord = req.body.findWord
    let allArticle = Article.find({content:{ $regex:req.body.findWord }})
	// 匹配的文章的数量
	let count = allArticle.length;
    const pagesize = 10;
	// 总页数
	let total = Math.ceil(count / pagesize);

	// 页码对应的数据查询开始位置
	let start = (page - 1) * pagesize; 

	// 将用户信息从数据库中查询出来
	let article = await Article.find({content:{$regex:req.body.findWord }}).limit(pagesize).skip(start)

    res.send({
        article: article,
        total: total
    })
}