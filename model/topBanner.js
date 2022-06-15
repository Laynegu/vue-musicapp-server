const mongoose = require('mongoose');

//定义集合规则并创建集合
const TopBanner = mongoose.model('TopBanner', mongoose.Schema({
  linkUrl: {
    type: String,
    require: true
  },
  picUrl: {
    type: String,
    require: true
  }
}))

//导出
module.exports = {
  TopBanner
}