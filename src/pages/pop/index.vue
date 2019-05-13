<template>
  <!-- 弹窗封装 contains 包含 -->
  <div class="hello">
    <div @click="showFilterHeader($event)"
      id="filter-header">pop-header</div>
    <br>
    <h1 @click.stop="showFilterHeader($event)">pop</h1>
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'pop-component',
    data() {
      return {}
    },
    mounted() {
      // 点击其他区域时, 隐藏指定区域(cDom)
      document.addEventListener('click', event => {
        var cDom = document.querySelector('#filter-header')
        var tDom = event.target
        if (cDom == tDom || cDom.contains(tDom)) {
          // ...
          console.log('包含')
        } else {
          console.log('不包含')
          cDom.style.display = 'none'
        }
      })
    },
    methods: {
      showFilterHeader(event) {
        // event.stopPropagation()
        document.querySelector('#filter-header').style.display = 'block'
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
  .check {
    border: 1px solid #000;
  }
</style>
