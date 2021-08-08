const formidable = require('formidable');
const path = require('path');
module.exports = (req, res) => {
	// 1.创建表单解析对象
	const form = new formidable.IncomingForm();
	// 2.配置上传文件的存放位置
	form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
	// 3.保留上传文件的后缀
	form.keepExtensions = true;
	// const imgPath = 'http://localhost:80/public/uploads/1.jpg'
    form.parse(req, (err, fields, files) => {
        // return res.send(files.file.path.split('public')[1])
		// return res.send('http://localhost:80/uploads/1.png')
		return res.send('http://localhost:80/' + files.file.path.split('public')[1])
		// console.log(files.file.path)
    })
}