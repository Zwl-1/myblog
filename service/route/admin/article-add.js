// 引入formidable第三方模块
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article')
const { Label } = require('../../model/label')

module.exports = async (req, res) => {
    console.log(req.body);
    console.log(req.app.locals.userId)
	if(await Label.find({"label": label})) await Label.create({
		label: req.body.label
	}) 
	await Article.create({
		title: req.body.title,
		author: req.app.locals.userId,
		publishDate: req.body.publishDate,
		content: req.body.content,
		label: req.body.label
	}).then(blogData => {
        res.send(blogData._id)
    });
	// 将页面重定向到文章列表页面
	// res.send('ok');
}
