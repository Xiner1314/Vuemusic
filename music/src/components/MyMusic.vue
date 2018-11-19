<template>
<div class="myMusic" @click="back" ref="myMusic">
  <div>
    <div class="list" ref="list">
      <div class="login">
        <login @login-event="loginFunc"></login>
      </div>
      <ul class="count">
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/ax_.png" width="25">
          </span>
          <span class="text">我的消息</span>
        </li>
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/axj.png" width="25">
          </span>
          <span class="text">会员中心</span>
        </li>
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/axg.png" width="25">
          </span>
          <span class="text">商城</span>
          <span class="rText">天鹅口琴领劵立减</span>
        </li>
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/ax7.png" width="25">
          </span>
          <span class="text">游戏推荐Beta</span>
          <span class="rText">预约《明日之后》送Ps4</span>
        </li>
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/ax5.png" width="25">
          </span>
          <span class="text">在线听歌免流量</span>
        </li>
      </ul>
      <ul class="people">
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/ax6.png" width="25">
          </span>
          <span class="text">我的好友</span>
        </li>
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/axb.png" width="25">
          </span>
          <span class="text">附近的人</span>
        </li>
      </ul>
      <ul class="hobby">
        <li class="myNews">
          <span class="icon">
            <img src="../public/img/axe.png" width="25">
          </span>
          <span class="text">个性换肤</span>
        </li>
        <li class="myNews">
          <span class="icon">
            <img src="../public/img/ax8.png" width="25">
          </span>
          <span class="text">听歌识曲</span>
        </li>
        <li class="myNews">
          <span class="icon">
            <img src="../public/img/axh.png" width="25">
          </span>
          <span class="text">定时停止播放</span>
        </li>
        <li  class="myNews">
          <span class="icon">
            <img src="../public/img/ax6.png" width="25">
          </span>
          <span class="text">扫一扫</span>
        </li>
        <li class="myNews">
          <span class="icon">
            <img src="../public/img/ax0.png" width="25">
          </span>
          <span class="text">音乐闹钟</span>
        </li>
        <li class="myNews">
          <span class="icon">
            <img src="../public/img/axi.png" width="25">
          </span>
          <span class="text">驾驭模式</span>
        </li>
        <li class="myNews">
          <span class="icon">
            <img src="../public/img/awz.png" width="25">
          </span>
          <span class="text">亲子频道</span>
        </li>
        <li class="myNews">
          <span class="icon">
            <img src="../public/img/ax3.png" width="25">
          </span>
          <span class="text">优惠券</span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
  <div class="footer">
    <div class="content">
      <div class="model item">
        <span class="icon">
          <img src="../public/img/axc.png" alt="" width="30">
        </span>
        <span class="text">夜间模式</span>
      </div>
      <div class="set item">
        <span class="icon">
          <img src="../public/img/axd.png" alt="" width="30">
        </span>
        <span class="text">设置</span>
      </div>
      <div class="getout item">
        <span class="icon">
          <img src="../public/img/ax4.png" alt="" width="30">
        </span>
        <span class="text">退出</span>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Login from '../components/Login.vue'
import BScroll from 'better-scroll'
export default{
  name: 'MyMusic',
  data () {
    return {
      isLogin: false,
      myMusic: true
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      this.$nextTick(() => {
        if (!this.myMusicScroll) {
          this.myMusicScroll = new BScroll(this.$refs.myMusic, {
            click: true
          })
          console.log(this.myMusicScroll)
        } else {
          this.scroll.refresh()
        }
      })
    },
    back () {
      this.$router.go(-1)
    },
    loginFunc () {
      this.isLogin = true
      // this.toRoute('myMusic', {
      // isLogin: this.isLogin
      // })
    }
  },
  components: {
    Login
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .myMusic
    position: absolute
    top: 0
    left: 0
    width: 85%
    height: 100%
    overflow: hidden
    border: 1px solid rgba(255, 255, 255, 0.5)
    background: rgba(147, 153, 159, 0.3)
    .list
      width: 100%
      .login
        position: relative
      .count
        position: relative
        left: 0
        top: 0
        display: table
        width: 100%
        font-size: 14px
        line-height: 24px
        text-align: left
        background: #fff
        .myNews
          display: flex
          width: 100%
          padding: 8px
          .icon
            flex: 0 0 25px
            width: 25px
            height: 25px
          .text
            padding: 0 3px 6px 3px
            color: rgb(7, 17, 27)
          .rText
            padding: 0 3px 6px 3px
            color: rgba(7, 17, 27, 0.4)
      .people
        position: relative
        top: 5px
        left: 0
        display: table
        width: 100%
        font-size: 14px
        line-height: 24px
        text-align: left
        background: #fff
        .myNews
          display: flex
          padding: 8px
          .icon
            flex: 0 0 15px
            width: 25px
            height: 25px
          .text
            flex: 1
            padding: 0 3px 6px 3px
            color: rgb(7, 17, 27)
      .hobby
        position: relative
        top: 10px
        left: 0
        width: 100%
        font-size: 14px
        line-height: 24px
        text-align: left
        background: #fff
        .myNews
          display: flex
          padding: 8px
          .icon
            flex: 0 0 15px
            width: 25px
            height: 25px
          .text
            flex: 1
            padding: 0 3px 6px 3px
            color: rgb(7, 17, 27)
  .footer
    position: fixed
    left: 0
    bottom: 0
    height: 60px
    width: 100%
    line-height: 60px
    background: #fff
    .content
      display: flex
      position: relative
      right: 0
      bottom: 0
      padding: 2px 0 0 20px
      vertical-align: bottom
      .item
        flex: 1
        white-space: nowrap
        vertical-align: bottom
      .model
        .icon
          display: inline-block
          margin-top: 10px
          width: 25px
          height: 25px
        .text
          display: inline-block
          padding: 4px
          font-size: 14px
          line-height: 24px
          text-align: center
          color: rgb(7, 17, 27)
      .set
        .icon
          display: inline-block
          margin-top: 10px
          width: 25px
          height: 25px
        .text
          display: inline-block
          padding: 4px
          font-size: 14px
          line-height: 24px
          color: rgb(7, 17, 27)
      .getout
        .icon
          display: inline-block
          margin-top: 10px
          width: 25px
          height: 25px
        .text
          display: inline-block
          padding: 4px
          font-size: 14px
          line-height: 24px
          color: rgb(7, 17, 27)
</style>
