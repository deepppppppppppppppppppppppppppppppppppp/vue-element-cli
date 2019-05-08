<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="curried(1)">curried</button>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        curriedMethodFns: [
          function() {
            console.log('fnarr1:', 1)
          },
          function() {
            console.log('fnarr2:', 2)
          },
          function() {
            console.log('fnarr3:', 2)
          }
        ]
      }
    },
    created() {
      // this.initArr()
      // this.curried()
      this.curriedMethod()
    },
    methods: {
      /**
       * 柯里化嵌套函数
       */
      curriedMethod() {
        let curring = function(fn) {
          let _argstr = '',
            _argarr = []

          return function cb() {
            // 传入参数不能为函数
            const _arg = Array.prototype.slice.call(arguments[0])
            const isFn = _arg.every(
              f => Object.prototype.toString.call(f) !== '[object Function]'
            )

            if (isFn) {
              debugger
              return fn.apply(this, _argstr)
            }

            Array.prototype.push.apply(_argarr, _arg)
            console.log('_argarr:', _argarr)
            _argarr.reduce((last, item) => {
              console.log(last, item)
              // return last()
            }, '')
            return cb
          }
        }

        let multi = function() {
          console.log(arguments[0])
        }

        let calc = curring(multi)
        let last = calc(this.curriedMethodFns)
        // last()
      },
      /**
       * 柯里化
       */
      curried() {
        let curring = function(fn) {
          let _args = []
          return function cb() {
            if (arguments.length === 0) {
              return fn.apply(this, _args)
            }

            Array.prototype.push.apply(_args, [].slice.call(arguments))
            console.log('_args:', _args)

            return cb
          }
        }

        let multi = function() {
          let total = 0
          let argsArray = Array.prototype.slice.call(arguments)
          argsArray.forEach(function(item) {
            total += item
          })

          return total
        }
        let calc = curring(multi)
        let last = calc(1, 2)(3)(4, 5, 6)
        console.log('last:', last())
      },
      /**
       * for 循环跳过空字符
       */
      initArr() {
        let arr = []
        arr[1] = '111'

        for (let i = 0; i < arr.length; i++) {
          console.log(i)
          console.log(arr[i])
        }

        console.log(arr)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
