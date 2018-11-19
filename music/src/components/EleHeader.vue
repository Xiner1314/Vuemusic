<template>
<div class="ele-header">
  <router-link to="/myMusic">
    <div class="nine">
    <span class="icon " @click="showMyMusic">
      <img src="../public/img/tf.png" width="30">
    </span>
    </div>
  </router-link>
  <router-link to="/search" @click="showMyMusic" >
    <div class="find">
      <span class="icon">
        <img src="../public/img/u0.png" width="30">
      </span>
    </div>
  </router-link>
  <div class="text">
    <div class="middle">
      <span class="icon">
          <img src="../public/img/t_actionbar_music_selected.png" width="60">
      </span>
      <span  class="icon">
        <img src="../public/img/t_actionbar_discover_selected.png" width="60">
      </span>
      <span class="icon">
          <img src="../public/img/t_actionbar_video_selected.png" width="60">
      </span>
    </div>
  </div>
</div>
</template>
<script>
export default{
  data () {
    return {
      show: false
    }
  },
  methods: {
    showMyMusic () {
      this.show = true
    },
    closeMyMusic () {
      this.show = false
    }
  }
//  components: {
//    NavMusic
//  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .ele-header
    display: flex
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 120px
    vertical-align: bottom
    line-height: 60px
    text-align: center
    background: rgb(240, 116, 107)
    .nine
      flex: 0 0 36px
      width: 36px
      display: inline-block
      position: absolute
      top: 4px
      left: 0
      .icon
        width: 30px
        height: 30px
        background-repeat: no-repeat
    .find
      flex: 0 0 36px
      width: 36px
      display: inline-block
      position: absolute
      top: 8px
      right: 3px
      .icon
        padding-right: 12px
        width: 30px
        height: 30px
    .text
      flex: 1
      .middle
        display: flex
        padding: 6px 0 0 8px
        vertical-align: top
        width: 75%
        margin: 0 auto
        height: 44px
        .icon
          flex: 1
</style>
