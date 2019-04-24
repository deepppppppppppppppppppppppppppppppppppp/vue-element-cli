<template>
  <div class="hello">
    <br>
    <br>
    <h1>element-transition</h1>
    <element-customtag @click="getElementText"
      @dblclick="setElementText">
      <p>1231321</p>
    </element-customtag>
  </div>
</template>

<script>
  export default {
    name: 'customtag',
    created() {},
    methods: {
      getElementText() {
        console.log(123)
      },
      setElementText() {}
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
