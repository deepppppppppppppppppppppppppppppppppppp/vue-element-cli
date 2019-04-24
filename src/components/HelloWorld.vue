<template>
  <div class="hello">
    <br>
    <br>
    <h1>好好学习,天天长胖</h1>
    <p @click="focusHello1">{{$attrs.t}}</p>
    <hello2 t="hello2"
      v-on="$listeners"></hello2>
  </div>
</template>

<script>
  import hello2 from './listener2.vue'
  export default {
    name: 'HelloWorld',
    interitAttrs: false,
    components: { hello2 },
    props: {
      name: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      focusHello1() {
        console.log('hello-1')
        this.$emit('focusHello1', 'parent-hello-1')
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
