/**
 * 插件
 */
const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require('tapable')
const path = require('path')
const fs = require('fs')

class MyFirstPlugin {
  constructor(option = {}) {
    this.option = option
  }

  // 将 `apply` 定义为其原型方法，此方法以 compiler 作为参数
  apply(compiler) {
    // 指定要附加到的事件钩子函数
    // console.log('MyFirstPlugin compiler:', compiler)
    const assetsRoot = path.resolve(__dirname, '../dist-' + process.env.env_config)
    const logger = fs.createWriteStream('log.txt', {
      flags: 'a' // 'a' means appending (old data will be preserved)
    })

    logger.write(assetsRoot)
    logger.end()
  }
}

module.exports = MyFirstPlugin
