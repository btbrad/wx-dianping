<template>
  <div class="personal">
    <div v-if="isLogin" class="person-picture">
      <img class="person-img" :src="userInfo.avatarUrl" alt />
    </div>
    <span v-if="isLogin">{{userInfo.nickName}} {{userInfo.gender ? '女' : '男'}}</span>
    <button v-else open-type="getUserInfo" @getuserinfo="login">点击登录</button>
    <div class="collection" >
      <span class="collection-text">收藏列表</span>
      <span class="right-arrows"></span>
    </div>
    <div class="downPage"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false,
      userInfo: {}
    }
  },
  components: {},
  methods: {
    login () {
      // 获取用户数据
      // 收藏：获取openid -->缓存？收藏；
      wx.getUserInfo({
        success: res => {
          console.log(res)
          this.isLogin = true
          this.userInfo = res.userInfo
        }
      })
    }
  }
}
</script>

<style scoped>
.personal {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rpx;
  font-size: 26rpx;
}

.person-picture {
  border-radius: 50%;
  width: 204rpx;
  height: 204rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #f3f5f2;
}
.collection{
  margin-top: 24rpx;
  width: 750rpx;
  height: 100rpx;
  line-height: 100rpx;
  border-top: 1px solid #dddddd;
}
.person-img {
  border-radius: 50%;
  width: 200rpx;
  height: 200rpx;
}
.collection-text{
    float: left;
    display: block;
    margin-left: 30rpx;
}
.right-arrows{
  width: 18rpx;
  height: 18rpx;
  display: block;
  rotate: 45deg;
  border-right: 1px solid;
  border-top: 1px solid;
  float: right;
  margin-top: 40rpx;
  margin-right: 35rpx;
}
.downPage{
  width: 750rpx;
  height: 780rpx;
  background: #cccccc;
}
</style>
