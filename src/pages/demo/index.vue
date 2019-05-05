<template>
  <div class="hello">
    <hello name="name"
      id="id"
      t="t"
      v-on:focusHello1="one"
      v-on:focusHello2="two"
      v-on:focusHello3="three"> </hello>
  </div>
</template>

<script>
  import hello from '@/components/HelloWorld.vue'
  import es from '@/es6/class.js'

  export default {
    name: 'demo',
    components: { hello },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      const { Parent, Child } = es
      const person = new Parent('xcy', 'man')
      const child = new Child('son', 5, 'manman')
    },
    methods: {
      one(msg) {
        console.log('msg1:', msg)
      },
      two(msg) {
        console.log('msg2:', msg)
      },
      three(msg) {
        console.log('msg3:', msg)
      }
    },
    /**
     * 生命周期，只作用与 keep-alive组件
     */
    activated() {
      console.log('activated', this.$route.path)
    },
    deactivated() {
      console.log('deactivated', this.$route.path)
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
