<template>
  <div>
    c:
    <input type="text"
      v-model="s">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        s: ''
      }
    },
    watch: {
      s(val) {
        this.$emit('update:child', val)
      }
    }
  }
</script>