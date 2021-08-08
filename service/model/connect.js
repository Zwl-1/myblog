// 引入mongoose第三方模块
const mongoose = require('mongoose');
mongoose.connect('mongodb://zwl:zwl@localhost/myBlog',{ useUnifiedTopology: true } )
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'))