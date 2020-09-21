<template>
  <div class="address-container">
    <p class="current-city">
      <span v-if="currentCity">{{ currentCity }}</span>
      <span v-else @click="getLocation">点击定位</span>
    </p>
    <div class="hot-city">

    </div>
  </div>
</template>

<script>
import localtion from '@/mixins/location.js'

export default {
  mixins: [localtion],
  data () {
    return {
      currentCity: ''
    }
  },
  async onLoad (option) {
    let { city } = option
    if (!city) {
      city = await this.getLocation()
    }
    this.currentCity = city
  }
}
</script>

<style scoped lang="scss">
.address-container {
  width: 100%;
  height: auto;
  .current-city {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding-left: 10px;
  }
  .hot-city {
    width: 100%;
    height: 300px;
    background: #ccc;
  }
}
</style>
