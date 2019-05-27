<template>
  <div>
    <p>f:{{s}}</p>
    <sync :child.sync="s"></sync>
  </div>
</template>
<script>
  import sync from '@/components/sync'
  export default {
    data() {
      return {
        s: ''
      }
    },
    components: { sync }
  }
</script>