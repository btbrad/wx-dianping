<template>
  <div class="header">
    <p class="app-title">点评网</p>
    <div class="app-header-menu">
      <div class="location">上海市</div>
      <div class="personal-center">
        <img src="../../static/images/icon-person.png" alt="person">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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