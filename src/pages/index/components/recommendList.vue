<template>
  <div class="recommend-list-container">
    <div class="title">
      猜你喜欢
    </div>
    <div class="store-item" v-for="(item, index) in list" :key="index" @click="showDetail(item._id)">
      <div class="image">
        <img :src="item.imgURL" alt="store">
      </div>
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="rate">
          <span class="stars"></span>
          <span class="avage-price">{{ item.avgPrice }}/人</span>
        </div>
        <div class="location">
          <span>{{ item.area }}</span>
          <span>{{ item.category }}</span>
        </div>
        <div class="specialty">
          <ul>
            <li v-for="(element, idx) in item.speciality" :key="idx">{{ element }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="store-item">
      <div class="image">
        <img src="/static/images/store-img.png" alt="store">
      </div>
      <div class="info">
        <div class="name">小南国(智汇店)</div>
        <div class="rate">
          <span class="stars"></span>
          <span class="avage-price">¥81/人</span>
        </div>
        <div class="location">
          <span>草桥</span>
          <span>北京菜</span>
        </div>
        <div class="specialty">
          <ul>
            <li>古色古香</li>
            <li>菜色精致</li>
            <li>干净卫生</li>
            <li>服务贴心</li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    showDetail (id) {
      wx.navigateTo({
        url: `/pages/detail/main?id=${id}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
.recommend-list-container {
  width: 100%;
  height: auto;
  .title {
    color: #666;
    font-size: 16px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .store-item {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background: #fff;
    .image {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      flex: 1;
      margin-left: 20px;
      .name {
        color: #333;
        font-size: 16px;
        font-weight: 700;
      }
      .rate {
        .stars {}
        .avage-price {
          font-size: 12px;
          color: #666;
        }
      }
      .location {
        font-size: 12px;
        color: #666;
        span {
          margin-right: 10px;
        }
      }
      .specialty {
        li {
          font-size: 12px;
          color: #666; 
          display: inline-block;
          border: 1px solid #666;
          margin-right: 5px;
          padding: 1px 5px;
        }
      }
    }
  }
}
</style>