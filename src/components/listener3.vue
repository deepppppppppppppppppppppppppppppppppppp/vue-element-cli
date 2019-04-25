<template>
  <div class="hello">
    <br>
    <br>
    <h1>好好学习,hello3</h1>
    <p @click="focusHello3">{{$attrs.t}}</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    interitAttrs: false, // $attrs不在渲染阶段显示在 html标签上
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      focusHello3() {
        console.log('hello-3')
        this.$emit('focusHello3', 'parent-hello-3')
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
