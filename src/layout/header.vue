<template>
  <div class="header">
    <p class="app-title">点评网</p>
    <div class="app-header-menu">
      <div class="location" @click="handleClick">{{ city }}</div>
      <div class="personal-center">
        <img src="../../static/images/icon-person.png" alt="person">
      </div>
    </div>
  </div>
</template>

<script>
const QQMapWX = require('../../libs/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js')

export default {
  data () {
    return {
      city: '定位中...'
    }
  },
  mounted () {
    this.getLocation()
  },
  methods: {
    /**
     * 获取当前地理位置
     */
    getLocation () {
      const _this = this
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          console.log(res)
          const latitude = res.latitude
          const longitude = res.longitude
          // const speed = res.speed
          // const accuracy = res.accuracy

          // 实例化API核心类
          const qqmapsdk = new QQMapWX({
            key: 'O3RBZ-EJZWU-M2RVQ-BF2FK-SWOPF-5VF5S'
          })
          qqmapsdk.reverseGeocoder({
            location: {
              latitude,
              longitude
            },
            success: (res) => {
              console.log('位置信息', res)
              if (res.status === 0) {
                const { city } = res.result.address_component
                _this.city = city
              }
            }
          })
        }
      })
    },
    /**
     * 跳转至城市选择页
     */
    handleClick () {
      wx.navigateTo({
        url: '/pages/address/main'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../style/style.scss';

  .header {
    width: 100%;
    height: 110px;
    background: #000;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 20px;
    box-sizing: border-box;
    .app-title {
      color: #fff;
      font-size: 20px;
      margin-top: 7px;
      font-weight: 700;
    }
    .app-header-menu {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      color: $gold;
      font-size: 12px;
      // margin-top: 10px;
      box-sizing: border-box;
      .location {
        width: 70%;
        flex: 1;
        display: flex;
        align-items: center;
        &::after {
          content: '';
          display: block;
          border-top: 5px solid $gold;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          margin-left: 2px;
          position: relative;
          top: 2px;
        }
      }
      .personal-center {
        width: 30px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>