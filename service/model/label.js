// 引入mongoose模块
const mongoose = require('mongoose');

// 创建评论集合规则
const labelSchema = new mongoose.Schema({
	// 评论内容
	label: {
		type: String
	}
});
// 创建评论集合
const Label = mongoose.model('Label', labelSchema);

// 将评论集合构造函数作为模块成员进行导出
module.exports = {
	Label
}