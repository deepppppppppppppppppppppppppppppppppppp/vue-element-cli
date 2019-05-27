<template>
  <div class="hello">
    <h1 @click="showFilterHeader($event)">testmore</h1>
    <div>
      <father-sync></father-sync>
    </div>
  </div>
</template>

<script>
  import Utils from '@/libs/utils'
  import fatherSync from './fatherSync'

  export default {
    name: 'testmore-component',
    data() {
      return {
        randomarr: ['xcy', 'cl', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        flattarr: [1, [2, [3, 4]]]
      }
    },
    created() {
      // function a() {
      //   console.log(this)
      // }
      // a()
      // let _thata = a.bind(window)
      // _thata()
      // -------------------------------------------------
      // let aDOMFunc = [
      //   Element.prototype.removeAttribute,
      //   Element.prototype.setAttribute,
      //   CSSStyleDeclaration.prototype.removeProperty,
      //   CSSStyleDeclaration.prototype.setProperty
      // ]
      // console.log(aDOMFunc)
      // -------------------------------------------------
      console.log('randomArr:', Utils.randomArr(this.randomarr))
      // -------------------------------------------------
      console.log('flatten:', Utils.flatten(this.flattarr))
      // -------------------------------------------------
      console.log('sortedIndex:', Utils.sortedIndex([10, 20, 30, 40, 50], 35)) // 3
    },
    mounted() {},
    methods: {
      showFilterHeader(event) {}
    },
    components: {
      fatherSync
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
