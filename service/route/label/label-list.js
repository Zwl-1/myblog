// 导入用户集合构造函数
const { Label } = require('../../model/label')
module.exports = async (req, res) => {
    let label = await Label.find({})
	console.log(label)
    res.send({
        label: label
    })
}