<template>
  <div @click="clickHandle">
    <app-header></app-header>
    <category></category>
    <recommend-list></recommend-list>
  </div>
</template>

<script>
import AppHeader from '@/layout/header.vue'
import Category from './components/category.vue'
import RecommendList from './components/recommendList.vue'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    AppHeader, Category, RecommendList
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    /**
     * 获取用户当前设置
     */
    getSettings () {
      wx.getSetting({
        success (res) {
          console.log(111, res.authSetting)
          // res.authSetting = {
          //   "scope.userInfo": true,
          //   "scope.userLocation": true
          // }
        }
      })
    }
  },

  created () {
    // let app = getApp()
    // this.getSettings()
    // const db = wx.cloud.database({
    //   env: 'cloud-test-2lm7t'
    // })
    // db.collection('dianping').get().then(res => {
    //   console.log(res)
    // })
    wx.cloud.callFunction({
      name: 'getStoreList'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
page{
  background: #0ff;
} 
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
