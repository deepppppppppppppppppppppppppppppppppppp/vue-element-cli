<template>
  <div class="hello">
    <br>
    <br>
    <h1>function-button</h1>
    <function-button></function-button>
  </div>
</template>

<script>
  import functionButton from './functionButton.js'

  export default {
    components: {
      functionButton
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
