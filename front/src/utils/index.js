export default class Utils {
  static ScrollTop (number, time) {
    if (!time) {
      document.body.scrollTop = document.documentElement.scrollTop = number
      return
    }
    // window.console.log('滚动的位置，时间', number, time)
    var spacingTime = 1 // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime // 计算循环次数
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
    var everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
    // window.console.log('每次滑动的距离', everTop)
    var scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
        spacingInex--
        this.ScrollTop(nowTop += everTop)
      } else {
        clearInterval(scrollTimer) // 清除计时器
      }
    }, spacingTime)
  }
}
