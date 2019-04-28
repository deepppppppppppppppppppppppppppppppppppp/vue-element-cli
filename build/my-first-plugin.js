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

class MyFirstPlugin {
  constructor(option = {}) {
    this.option = option
    console.log('MyFirstPlugin option:', this.option)
  }

  // 将 `apply` 定义为其原型方法，此方法以 compiler 作为参数
  apply(compiler) {
    // 指定要附加到的事件钩子函数
    console.log('MyFirstPlugin compiler:', compiler)
    // 指定要附加到的事件钩子函数
    // compiler.hooks.emit.tapAsync('MyExampleWebpackPlugin', (compilation, callback) => {
    //   console.log('This is an example plugin!')
    //   console.log(
    //     'Here’s the `compilation` object which represents a single build of assets:',
    //     compilation
    //   )

    //   // 使用 webpack 提供的 plugin API 操作构建结果
    //   compilation.addModule(/* ... */)

    //   callback()
    // })
  }
}

module.exports = MyFirstPlugin
