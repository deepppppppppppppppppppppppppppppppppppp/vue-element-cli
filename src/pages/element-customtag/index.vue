<template>
  <div class="hello">
    <br>
    <br>
    <h1>element-customtag</h1>
    <br>
    <br>
    <x-customtag name="x-customtag"
      @click="getElementText"
      @dblclick="setElementText">
      <p @click="iscollapse=!iscollapse">FunctionalRenderContext</p>
    </x-customtag>

    <el-collapse-transition name="el-collapse-transition">
      <div v-show="iscollapse">
        <p>transition</p>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  export default {
    name: 'customtag',
    data() {
      return {
        iscollapse: true
      }
    },
    methods: {
      getElementText() {
        alert(11)
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
