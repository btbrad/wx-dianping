<template>
  <div class="store-rate">
    <img class="star" v-for="(item, index) in starArr" :key="index" :src="'/static/images/star-'+item+'.png'" :alt="rate">
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    rate: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    console.log(this.rate)
  },
  computed: {
    starArr () {
      let arr = []
      let integer = parseInt(this.rate)
      for (let index = 0; index < integer; index++) {
        arr.push('on')
      }
      if (this.rate - integer > 0) {
        arr.push('half')
      }
      for (let i = 0; i < (5 - arr.length > 0 ? 5 - arr.length : 0); i++) {
        arr.push('off')
      }
      console.log(arr)
      return arr
    }
  }
}
</script>

<style scoped lang="scss">
.store-rate {
  width: 100px;
  height: 40px;
  display: flex;
  .star {
    width: 20px;
    height: 20px;
    display: block;
  }
}
</style>