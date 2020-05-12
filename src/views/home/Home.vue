<template>
  <div id="home">
    <full-page :options="options">
        <div class="section">
           <page-one/>
        </div>
        <div class="section">
           <page-two/>
        </div>
        <div class="section">
           <page-three/>
        </div>
        <div class="section">
           <page-four/>
        </div>
        <div class="section">
           <page-five/>
        </div>
        <div class="section" id="sectionFooter">
           <tab-bar/>
        </div>
    </full-page>
  </div>
</template>

<script>

import PageOne from './childCpmps/page1'
import PageTwo from './childCpmps/page2'
import PageThree from './childCpmps/page3'
import PageFour from './childCpmps/page4'
import PageFive from './childCpmps/page5'
import TabBar from 'components/common/tabbar/TabBar'

export default {
  name: 'Home',
  data () {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        css3: true,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6']
      }
    }
  },
  components: {
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    PageFive,
    TabBar
  }
}
</script>
<style scoped lang="scss">
.section {
  div {
    text-align: center;
  }
}
#sectionFooter {
  display: block!important;
  width: 100%;
  color: #797a85;
  background: #303848;
  .fp-tableCell {
    display:block !important;
  }
}
</style>
