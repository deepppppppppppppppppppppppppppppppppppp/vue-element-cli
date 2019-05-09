<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="curried(1)">curried</button>
    <!-- <router-view /> -->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        cmf: [
          function(a) {
            return a * 2 // 2 4 6
          }
        ]
      }
    },
    created() {
      // this.initArr()
      // this.curried()
      // this.curriedFilterMethod()
    },
    methods: {
      /**
       * 柯里化嵌套函数，过滤器
       * fn：multi
       */
      curriedFilterMethod() {
        let curring = function(fn) {
          let _argstr = '',
            _argarr = []

          return function cb() {
            // 传入参数不能为函数
            const _arg = Array.prototype.slice.call(arguments) // [...arguments]
            const isFn = _arg.every(
              f => Object.prototype.toString.call(f) !== '[object Function]'
            )

            if (isFn) {
              console.log('_argarr:', _argarr)
              _argstr = _argarr.reduce((last, item) => item(last), 1)
              return fn.call(this, _argstr)
            }

            Array.prototype.push.apply(_argarr, _arg)

            return cb
          }
        }

        let multi = function() {
          console.log('multi:', arguments[0])
        }

        let calc = curring(multi)
        let last = calc(this.cmf[0])(this.cmf[0])(this.cmf[0])
        last(1)
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
      },
      /**
       * 原型
       */
      isPrototype() {
        function Person() {}
        Person.prototype.name = 'haha'
        let person = new Person()

        // new 定义{}.__proto__=Person.prototype
        console.log(person.__proto__ === Person.prototype)
        // Person原型指向 => Person构造函数
        console.log(Person.prototype.constructor === Person)
        // person继承Person原型constructor 指向构造函数
        console.log(person.constructor === Person)
        // 所以
        console.log(person.constructor === Person.prototype.constructor)
        // Person原型 是object的实例 ，所以
        console.log(Person.prototype.__proto__ === Object.prototype)
        // object在原型链顶级 指向null
        console.log(Object.prototype.__proto__ === null)
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
