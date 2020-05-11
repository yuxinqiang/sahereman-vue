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
    </full-page>
  </div>
</template>

<script>

import PageOne from './childCpmps/page1'
import PageTwo from './childCpmps/page2'
import PageThree from './childCpmps/page3'
import PageFour from './childCpmps/page4'
import PageFive from './childCpmps/page5'

export default {
  name: 'Home',
  data () {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu'
      },
      sectionList: 5
    }
  },
  components: {
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    PageFive
  }
}
</script>
<style scoped lang="scss">
.section {
  div {
    text-align: center;
  }
}
</style>
