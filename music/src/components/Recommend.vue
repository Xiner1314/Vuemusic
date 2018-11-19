<template>
    <div class="recommend" ref="recommend">
        <banner :imgs="imgs" :width="width" :height="height"></banner>
        <div class="singList">
          <div class="navSing">
            <div class="rowView ">
              <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_fm.png" alt="" width="57">
                </span>
              </div>
              <span class="text"> 私人FM </span>
            </div>
            <div class="rowView">
              <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_daily.png" alt="" width="57">
                </span>
              </div>
              <span class="text">每日推荐</span>
            </div>
            <div class="rowView">
              <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_playlist.png" alt="">
                </span>
              </div>
              <span class="text">歌单</span>
            </div>
            <div class="rowView">
              <div @click="showView">
                <span class="icon">
                  <img src="../public/img/t_dragonball_icn_rank.png" alt="">
                </span>
              </div>
              <span class="text">排行榜</span>
            </div>
          </div>
        </div>
        <div class="songlists">
          <p class="menuList">推荐歌单&nbsp;&gt;</p>
          <music-menu :lists="lists"></music-menu>
        </div>
        <div class="songlists">
          <p class="menuList">最新歌单&nbsp;&gt;</p>
          <news-menu :news="news"></news-menu>
        </div>
        <!--<song-count :lists="lists"></song-count>-->
        <songs v-show="show" @close="closeView" :hots="hots"></songs>
        <router-view></router-view>
    </div>
</template>
<script>
import Banner from './Banner.vue'
import Songs from './recommend/Songs.vue'
import MusicMenu from './MusicMenu.vue'
import NewsMenu from './NewsMenu.vue'
export default{
  name: 'Recommend',
  created () {
    this.axios('/api/list')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.lists = res.data
          // console.log(this.lists)
        }
      })
    this.axios('/api/news')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.news = res.data
          // console.log(this.lists)
        }
      })
  },
  props: {
    hots: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
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
      show: false,
      lists: [],
      news: []
    }
  },
  methods: {
    showView () {
      this.show = true
    },
    closeView () {
      this.show = false
    }
  },
  components: {
    Banner: Banner,
    Songs,
    MusicMenu,
    NewsMenu
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/scss/mixin"
  .recommend
    position: fixed
    top: 119px
    left: 0
    bottom: 0
    width: 100%
    border: 0
    overflow: auto
    .singList
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
      .hotSing
        position: relative
        width: 100%
        .name
          display: inline-block
          width: 40px
          height: 40px
      .songlists
        position: relative
        width: 100%
        .menuList
          display: inline-block
          width: 100%
          height: 60px
          padding-left: 5px
          font-size: 18px
          line-height: 60px
          color: rgb(7, 17, 27)
</style>
