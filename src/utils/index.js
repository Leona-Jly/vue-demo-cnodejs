export default {
  formatTime (time) { // time格式为'2017-12-03T13:58:58.901Z'
    const between = (Date.now() - new Date(time)) / 1000 // 间隔秒数
    if (between < 3600) {
      return `${~~(between / 60)}分钟前`
    } else if (between < 86400) {
      return `${~~(between / 3600)}小时前`
    } else {
      return `${~~(between / 86400)}天前`
    }
  }
}
