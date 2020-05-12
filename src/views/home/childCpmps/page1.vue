<template>
  <div id="homePage-1">
    <div class="page-left">
      <h1>
        <span>高品质</span>
        <span>定制化</span>
      </h1>
      <h3>企业互联网全线应用服务</h3>
      <a href="javascript:void(0)" class="view-detail">查看详情</a>
    </div>
    <div class="page-right">
      <img src="~assets/img/banner/banner_2.5D.png" alt="sanereman">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageOne',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
#homePage-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: url("~assets/img/banner/BGxian.png") center no-repeat,
              url('~assets/img/banner/page1_bgbg.jpg') center no-repeat;
  color: #fff;
  >div {
    margin: auto;
  }
}
.page-left {
  h1 {
    font-size: 58px;
    margin-bottom: 50px;
    span {
      margin-right: 50px;
    }
  }
  h3 {
    font-size: 36px;
    margin-bottom: 50px;
    text-align: left;
  }
  .view-detail {
    font-size: 16px;
    line-height: 60px;
    display: block;
    width: 216px;
    height: 60px;
    transition: all .3s;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
    &:hover {
      color: #072c69;
      background-color: #fff;
    }
  }
}
</style>
