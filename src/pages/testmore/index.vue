<template>
  <div class="hello">
    <h1 @click="showFilterHeader($event)">testmore</h1>
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'testmore-component',
    data() {
      return {}
    },
    created() {
      function a() {
        console.log(this)
      }
      a()
      let _thata = a.bind(window)
      _thata()

      // let aDOMFunc = [
      //   Element.prototype.removeAttribute,
      //   Element.prototype.setAttribute,
      //   CSSStyleDeclaration.prototype.removeProperty,
      //   CSSStyleDeclaration.prototype.setProperty
      // ]

      // console.log(aDOMFunc)
    },
    mounted() {},
    methods: {
      showFilterHeader(event) {}
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
  .check {
    border: 1px solid #000;
  }
</style>
