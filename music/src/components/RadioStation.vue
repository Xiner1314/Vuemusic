<template>
  <div class="radio-station" ref="radio">
   <div>
     <banner :imgs="imgs" :width="width" :height="height"></banner>
     <div class="mvList">
       <div class="navSing">
         <div class="rowView ">
           <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_radio_calss.png" alt="" width="57">
                </span>
           </div>
           <span class="text"> 电台分类 </span>
         </div>
         <div class="rowView">
           <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_radio_rank.png" alt="" width="57">
                </span>
           </div>
           <span class="text">电台排行</span>
         </div>
         <div class="rowView">
           <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_radio_vip.png" alt="">
                </span>
           </div>
           <span class="text">DI电音</span>
         </div>
         <div class="rowView">
           <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_xiaoice.png" alt="">
                </span>
           </div>
           <span class="text">小冰电台</span>
         </div>
       </div>
     </div>
     <div class="todayList">
       <div class="name">今日优选&nbsp;&gt;</div>
       <TodayFirst :mv="mv"></TodayFirst>
     </div>
     <div class="everyList">
       <div class="name">每日美声&nbsp;&gt;</div>
       <EveryDay :mv="mv"></EveryDay>
     </div>
     <router-view></router-view>
   </div>
  </div>
</template>
<script>
import Banner from './Banner.vue'
// import BScroll from 'better-scroll'
import TodayFirst from './TodayFirst.vue'
import EveryDay from './EveryDay.vue'
export default{
  name: 'RadioStation',
  created () {
    this.axios('/api/mv')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.mv = res.data
          console.log(this.mv)
        }
      })
  },
  data () {
    return {
      mv: [],
      imgs: [
        {img: 'http://p4.music.126.net/I1zKnPl4g9snKbAA5zJi3Q==/18623527953173535.jpg'},
        {img: 'http://p4.music.126.net/j_cH-yjz5tTLIDFmz4sSiQ==/18833534674063637.jpg'},
        {img: 'http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg'},
        {img: 'http://p3.music.126.net/tw17cN9NJfa5FmFDyS0A_g==/18624627464801294.jpg'},
        {img: 'http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg'},
        {img: 'http://p3.music.126.net/U3y3VH4_3cX8pXECLFsHjA==/18624627464801303.jpg'},
        {img: 'http://p4.music.126.net/F7yr2uUq982rTIWlwvaThg==/18964376555989729.jpg'},
        {img: 'http://p4.music.126.net/qADzamZDC3c5whBibC_rAQ==/18906102439712983.jpg'}
      ],
      width: 730,
      height: 336,
      show: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    showView () {
      this.show = true
    }
  },
  components: {
    Banner,
    TodayFirst,
    EveryDay
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/scss/mixin"
  .radio-station
    position: fixed
    top: 119px
    left: 0
    width: 100%
    overflow: hidden
    border: 0
    background: #fff
    .mvList
      position: relative
      top: 0
      left: 0
      .navSing
        display: flex
        width: 100%
        padding: 12px 0 18px 0
        @include border-1px(rgba(7, 17, 27, 0.2))
        .rowView
          /*display: table-cell*/
          flex: auto
          position: relative
          top: 0
          left: 10px
          width: 57px
          .icon
            display: block
            width: 57px
            height: 57px
            /*margin-left: 10px*/
            border-radius: 50%
            vertical-align: top
            text-align: center
            background: rgb(240, 116, 107)
            img
              width: 57px
              height: 57px
        .text
          display: inline-block
          padding: 5px 0 0 0
          width: 57px
          font-size: 14px
          line-height: 14px
          text-align: center
    .todayList
      position: relative
      width: 100%
      .name
        display: inline-block
        font-size: 16px
        line-height: 35px
        height: 40px
    .everyday
      position: relative
      width: 100%
      .name
        display: inline-block
        font-size: 16px
        line-height: 35px
        height: 40px
</style>
