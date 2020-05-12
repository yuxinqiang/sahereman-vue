<template>
  <div class="foot">
    <div class="foot-top">
      <ul class="menu-lists">
        <li v-for="item in footMenus" :key="item.index">
          <p>{{ item.title }}</p>
          <ul>
            <li v-for="itemcontent in item.lists" :key="itemcontent.index" >
              <a href="#">{{ itemcontent.content }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="erwei-num">
        <img  class="footer-logo" src="~assets/img/white_logo1.png" alt="sahereman">
        <img  class="footer-erweima" src="~assets/img/wxnum.jpg" alt="sahereman">
        <span>关注尚禾维曼公众号</span>
      </div>
    </div>
    <div class="foot-bottom">
      <div class="copyright">
        <p>
          <span>© 2019 青岛尚禾维曼网络科技有限公司</span>
          <span>鲁 ICP 备 18032842 号</span>
        </p>
      </div>
      <div class="iso">
        <img src="~assets/img/bottom-telephone.png" alt="sahereman">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      footMenus: [
        {
          index: 1,
          title: '首页',
          lists: [
            { index: 1, content: '公司简介' },
            { index: 2, content: '企业营销解决方案' },
            { index: 3, content: '电商平台解决方案' },
            { index: 4, content: '旅游平台解决方案' },
            { index: 5, content: '视频流解决方案' }
          ]
        },
        {
          index: 2,
          title: '解决方案',
          lists: [
            { index: 1, content: '企业营销解决方案' },
            { index: 2, content: '电商平台解决方案' },
            { index: 3, content: '旅游平台解决方案' },
            { index: 4, content: '视频流解决方案' }
          ]
        },
        {
          index: 3,
          title: '互联网资讯中心',
          lists: [
            { index: 1, content: '企业营销解决方案' },
            { index: 2, content: '电商平台解决方案' },
            { index: 3, content: '旅游平台解决方案' },
            { index: 4, content: '视频流解决方案' }
          ]
        },
        {
          index: 4,
          title: '关于我们',
          lists: [
            { index: 1, content: '公司介绍' },
            { index: 2, content: '发展历程' },
            { index: 3, content: '联系我们' },
            { index: 4, content: '加入我们' }
          ]
        }
      ]
    }
  }
  // mounted () {
  //   console.log(this.footMenus)
  //   for (const i in this.footMenus) {
  //     console.log(this.footMenus[i])
  //   }
  // }
}

</script>
<style lang="scss" scoped>
.foot {
  width: 100%;
  padding: 0 185px;
  padding-top: 40px;
}
.foot-top {
  display: flex;
  justify-content: space-between;
  >ul {
    display: flex;
    width: 600px;
    justify-content: space-between;
    text-align: left;
    >li {
      font-size: 12px;
      color: #797a85;
      p {
        display: block;
        margin-bottom: 20px;
        cursor: pointer;
        color: #c6c6d1;
      }
      li {
        margin: 10px 0;
        a {
          font-size: 12px;
          color: #797a85;
        }
      }
    }
  }
  .erwei-num {
    display: flex;
    flex-direction: column;
    .footer-logo {
      width: 120px;
      height: 22px;
      margin-bottom: 20px;
    }
    .footer-erweima {
      width: 120px;
      height: 120px;
    }
    span {
      font-size: 12px;
      display: block;
      margin: 10px 0;
    }
  }
}
.foot-bottom {
  display: flex;
  padding-top: 20px;
  border-top: 1px solid #454f62;
  justify-content: space-between;
  .copyright {
    p {
      font-size: 12px;
      margin-bottom: 5px;
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
