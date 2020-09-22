<template>
  <div class="address-container">
    <p class="current-city">
      <span v-if="currentCity">{{ currentCity }}</span>
      <span v-else @click="getLocation">点击定位</span>
    </p>
    <div class="right-indicator">
      <p class="item" @click="handleScroll('hot')">热门</p>
      <div class="item" v-for="(item,index) in indicators" :key="index" @click="handleScroll(item)">{{ item }}</div>
    </div>
    <scroll-view class="scrollView" :scroll-y="true" :scroll-into-view="currentLetter+'_scroll'" :enable-back-to-top="true">
      <div id="hot_scroll" class="hot-city">
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

      <div class="city-list">
          <div class="city-sublist" v-for="(item, index) in cityData" :key="index">
            <p class="city-letter" :id="item.letter+'_scroll'">{{ item.letter }}</p>
            <p class="city-row" v-for="(it, idx) in item.citys" :key="idx">{{ it }}</p>
          </div>
      </div>
    </scroll-view>

  </div>
</template>

<script>
import localtion from '@/mixins/location.js'
const cityData = require('@/utils/cityData.js')

export default {
  mixins: [localtion],
  data () {
    return {
      currentCity: '',
      indicators: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ],
      cityData,
      currentLetter: ''
    }
  },
  async onLoad () {
    console.log('全局变量', this.globalData)
    let { city } = this.globalData
    if (!city) {
      city = await this.getLocation()
    }
    this.currentCity = city
  },
  methods: {
    handleScroll (id) {
      console.log(id)
      this.currentLetter = id
    }
  }
}
</script>

<style scoped lang="scss">
.address-container {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  .current-city {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .hot-city {
    width: 100%;
    height: auto;
    background: #ccc;
    color: #333;
    padding: 10px 0;
    box-sizing: border-box;
    .title {
      font-size: 16px;
      padding: 10px;
      box-sizing: border-box;
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
    z-index: 1000;
    .item {
      width: 100%;
      height: 15px;
      font-size: 12px;
      text-align: center;
      color: #333;
    }
  }
  .city-list{
    width: 100%;
    height: auto;
    .city-letter {
      width: 100%;
      height: 80px;
      line-height: 80px;
      background: #ccc;
      padding-left: 20px;
      font-size: 24px;
      box-sizing: border-box;
    }
    .city-row{
      width: 100%;
      height: 50px;
      background: #fff;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
      line-height: 50px;
      padding-left: 20px;
      box-sizing: border-box;
    }
  }
}
.scrollView {
  height: 1200px;
}
</style>
