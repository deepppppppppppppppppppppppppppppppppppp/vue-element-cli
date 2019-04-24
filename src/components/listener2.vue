<template>
  <div class="hello">
    <br>
    <br>
    <h1>好好学习,hello2</h1>
    <p @click="focusHello2">{{$attrs.t}}</p>
    <hello3 t="hello3"
      v-on="$listeners"></hello3>
  </div>
</template>

<script>
  import hello3 from './listener3.vue'
  export default {
    name: 'HelloWorld',
    interitAttrs: false,
    components: { hello3 },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      focusHello2() {
        console.log('hello-2')
        this.$emit('focusHello2', 'parent-hello-2')
        //         export default {
        //   name: 'theme',

        //   render(h) {
        //     const theme = this.$attrs // 通过 $attrs 可以拿到使用该组件时定义的 props，而无需声明有哪些 props

        //     const merge = vNode => {
        //       if (!vNode.tag) {
        //         return
        //       }

        //       if (vNode.componentOptions) {
        //         let props = vNode.componentOptions.propsData
        //         props = Object.assign({}, theme, props)
        //         vNode.componentOptions.propsData = props
        //       } else {
        //         if (!vNode.data) {
        //           return
        //         }

        //         let attrs = vNode.data.attrs || {}
        //         attrs = Object.assign({}, theme, attrs)
        //         vNode.data.attrs = attrs
        //       }
        //     }

        //     this.$slots.default.map(vNode => merge(vNode))

        //     Object.keys(this.$attrs).forEach(key => {
        //       this.$attrs[key] = null
        //     })

        //     return this.$slots.default[0] // 直接返回，无需额外渲染
        //   }
        // }
      }
    }
  }
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
