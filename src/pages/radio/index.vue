<template>
  <div class="hello">
    <br>
    <h1>radio-component</h1>
    <div>
      <p v-for="item in priceData"
        :key="item.id"
        :class="{'check':price==item.test}"
        @click="check($event)">
        {{item.test}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'radio-component',
    data() {
      return {
        priceData: [
          {
            test: '100以内',
            minPrice: '',
            maxPrice: 100
          },
          {
            test: '100～1000',
            minPrice: 100,
            maxPrice: 1000
          },
          {
            test: '1000～5000',
            minPrice: 1000,
            maxPrice: 5000
          },
          {
            test: '5000以上',
            minPrice: 5000,
            maxPrice: ''
          }
        ],
        price: ''
      }
    },
    methods: {
      check(e) {
        const value = e.target.innerHTML.trim()
        this.price = this.price != value ? value : ''
        console.log(this.price)
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
