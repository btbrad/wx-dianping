const QQMapWX = require('../../libs/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js')

export default {
  methods: {
    /**
     * 获取当前地理位置
     */
    getLocation () {
      const _this = this
      return new Promise(resolve => {
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
                  resolve(city)
                }
              }
            })
          }
        })
      })
    }
  }
}
