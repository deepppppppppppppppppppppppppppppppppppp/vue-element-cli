<template>
    <div class="hello">
        <hello> </hello>
    </div>
</template>

<script>
    import hello from "@/components/HelloWorld.vue";
    export default {
      name: "demo",
      components: { hello },
      data() {
        return {
          msg: "Welcome to Your Vue.js App"
        };
      }
    };
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
