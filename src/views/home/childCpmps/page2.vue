<template>
  <div id="homePage-2">
    <div class="part-title">
      <h3>企业营销解决方案</h3>
      <p>尚禾维曼开启您企业互联网大门的启蒙老师，为企业互联网保驾护航</p>
    </div>
    <div class="part-content">
      <div class="part-swiper">
        <div class="swiper-left">
          <h3>品牌策划</h3>
          <span class="Grader"></span>
          <p>搭建一套完善的计划方案，将线下的产品快速引导到线上来达到增容的效果，打破传统营销的平静</p>
        </div>
        <div class="swiper-right">
          <img src="~assets/img/banner/img_pinpaicehua.jpg" alt="sashereman">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
#homePage-2 {
  width: 100%;
  height: 100%;
  padding-top: 120px;
  background: url("~assets/img/banner/bg_diandian.png") center no-repeat,
              linear-gradient(to right,#fff 0,#f1f2f6 100%);
  background-size: cover;
}
.part-title {
  position: relative;
  width: 100%;
  margin-bottom: 65px;
  -webkit-transition: all 1s;
  transition: all 1s;
  text-align: center;
  h3 {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
    color: #072c69;
  }
  p {
    font-size: 16px;
    color: #acadb3;
  }
}
.part-content {
  position: relative;
  .part-swiper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 35px
  }
  .swiper-left {
    margin: auto;
    text-align: left;
    h3 {
      font-size: 20px;
      font-weight: 700;
      color: #072c69;
    }
    .Grader {
      display: inline-block;
      min-width: 83px;
      height: 2px;
      margin: 10px 0;
      margin-top: 15px;
      margin-bottom: 30px;
      background: linear-gradient(to right,#2c74d5 0,#75daef 100%);
      background-size: cover;
    }
    p {
      font-size: 14px;
      line-height: 25px;
      max-width: 410px;
      text-align: left;
      color: #95969d;
    }
  }
  .swiper-right {
    margin: auto;
    box-shadow: -20px 20px 40px #ccc;
  }
}
</style>
