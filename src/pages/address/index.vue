<template>
  <div class="address-container">
    <p class="current-city">
      <span v-if="currentCity">{{ currentCity }}</span>
      <span v-else @click="getLocation">点击定位</span>
    </p>
    <div class="right-indicator">
      <div class="item" v-for="(item,index) in indicators" :key="index">{{ item }}</div>
    </div>
    <div class="hot-city">
      <div class="title">热门城市</div>
      <div class="hot-city-list">
        <div>上海</div>
        <div>北京</div>
        <div>广东</div>
        <div>深圳</div>
        <div>天津</div>
        <div>杭州</div>
        <div>南京</div>
        <div>苏州</div>
        <div>成都</div>
        <div>武汉</div>
        <div>重庆</div>
        <div>西安</div>
      </div>
    </div>
  </div>
</template>

<script>
import localtion from '@/mixins/location.js'

export default {
  mixins: [localtion],
  data () {
    return {
      currentCity: '',
      indicators: [
        '热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ]
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
    height: auto;
    background: #ccc;
    color: #333;
    padding: 10px 0;
    .title {
      font-size: 16px;
      padding: 10px;
    }
    .hot-city-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      div {
        width: 80px;
        height: 30px;
        background: #fff;
        font-size: 16px;
        margin: 5px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .right-indicator {
    position: fixed;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    width: 50px;
    flex-wrap: wrap;
    .item {
      width: 100%;
      height: 15px;
      font-size: 12px;
      text-align: center;
      color: #333;
    }
  }
}
</style>
