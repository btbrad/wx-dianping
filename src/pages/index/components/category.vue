<template>
  <div class="category-container">
    <a class="category-item">
      <div class="category-icon">
        <img src="/static/images/food.png" alt="food">
      </div>
      <div class="category-title">美食</div>
    </a>
    <a class="category-item">
      <div class="category-icon">
        <img src="/static/images/ktv.png" alt="food">
      </div>
      <div class="category-title">KTV</div>
    </a>
    <a class="category-item">
      <div class="category-icon">
        <img src="/static/images/foot.png" alt="food">
      </div>
      <div class="category-title">足疗</div>
    </a>
    <a class="category-item">
      <div class="category-icon">
        <img src="/static/images/hotel.png" alt="food">
      </div>
      <div class="category-title">酒店</div>
    </a>
    <a class="category-item">
      <div class="category-icon">
        <img src="/static/images/salon.png" alt="food">
      </div>
      <div class="category-title">美发</div>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.category-container {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  a.category-item {
    display: block;
    width: 50px;
    .category-icon {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .category-title {
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>