<template>
  <div id="navBar" :localName=localName>
    <div class="nav-left">
      <router-link to="/home">
      <!-- logo部分默认展示白色，根据页面内容变化 -->
        <img  v-if="isShow" src="~assets/img/logo.png" alt="sahereman">
        <img v-else  src="~assets/img/white_logo.png" alt="sahereman">
      </router-link>
    </div>
    <div class="nav-center">
      <!-- 导航默认展示部分，鼠标触摸后从右侧滑出 -->
     <div class="menu-name">
       <div class="menu-icon">
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div class="local-name">
         <span>{{ localName }}</span>
       </div>
     </div>
     <!-- 默认不展示，鼠标触摸导航默认展示部分时，从右侧滑入 -->
     <div class="menu-lists">
       <ul class="nav-list1">
         <li v-for="item in menuLists" :key="item.index">
           <router-link  v-if="item.linkHref" :to="{path: item.linkHref}">
             <span>{{ item.title }}</span>
           </router-link>
           <a  v-else href="javascript:void(0)">
             <span>{{ item.title }}</span>
           </a>
           <div v-if="item.childList.length" class="child-menu">
             <ul>
               <li v-for="childItem in item.childList" :key="childItem.index">
                  <router-link  v-if="childItem.linkHref" :to="{path: item.linkHref}">
                    <span>{{ childItem.childTitle }}</span>
                  </router-link>
                  <a  v-else href="javascript:void(0)">
                    <span>{{ childItem.childTitle }}</span>
                  </a>
               </li>
             </ul>
           </div>
         </li>
       </ul>
     </div>
    </div>
    <div class="nav-right">
      <!-- 展示变化时机与logo位置同步 -->
      <img  v-if="isShow" src="~assets/img/telephone2.png" alt="sahereman">
      <img  v-else src="~assets/img/telephone_white2.png" alt="sahereman">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    localName: {
      type: String,
      default: '首页'
    }
  },
  data () {
    return {
      isShow: true,
      menuLists: [
        { index: 1, title: '首页', linkHref: '/home', childList: [] },
        {
          index: 2,
          title: '解决方案',
          linkHref: '',
          childList: [
            {
              childIndex: 1,
              childTitle: '电商平台解决方案'
            },
            {
              childIndex: 2,
              childTitle: '旅游平台解决方案'
            },
            {
              childIndex: 3,
              childTitle: '视频流解决方案'
            },
            {
              childIndex: 4,
              childTitle: '企业营销解决方案'
            }
          ]
        },
        { index: 3, title: '咨询中心', linkHref: '/news', childList: [] },
        { index: 4, title: '联系我们', linkHref: '/about', childList: [] }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#navBar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  background: #fff;
  width: 100%;
  height: 80px;
  z-index: 50;
  padding: 0 5%;
}
.nav-center {
  flex: 1;
  display: flex;
  justify-content: space-around;
  .menu-name {
    position: relative;
    right: 0;
    display: flex;
    .menu-icon {
      width: 26px;
      height: 29px;
      margin: auto 10px;
      margin-left: 20px;
      padding-top: 5px;
      cursor: pointer;
      transition: all 1s;
      opacity: 1;
      span {
        display: block;
        width: 25px;
        height: 2px;
        margin: 3px 0;
        cursor: pointer;
        transition: all .2s ease 0s;
        border-top: 3px solid #344356
      }
    }
    .local-name {
      line-height: 25px;
      height: 20px;
      margin: auto 0;
      transition: all 1s;
      opacity: 1;
      color: #344356;
      span {
        display: block;
        height: 100%;
        transition: all .2s ease 0s;
      }
    }
  }
  .menu-lists {
    position: relative;
    // right: -100%;
    display: flex;
    width: 600px;
    height: 100%;
    transition: all 1s;
    // opacity: 0;
    .nav-list1 {
      position: relative;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      color: #adb1b7;
      justify-content: space-around;
      >li {
        margin: auto;
      }
    }
    .child-menu {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      padding: 15px;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 1px 3px #ccc;
      ul {
        display: flex;
        justify-content: space-around;
        height: 80px;
        li {
          margin: auto;
          font-size: 14px;
          font-weight: 700;
          opacity: .5;
          color: #344356;
        }
      }
    }
  }
}
.nav-left,
.nav-right {
  display: flex;
  img {
    margin: auto 0;
    width: 100%;
  }
}
</style>
