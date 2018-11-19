<template>
  <div class="search">
    <div class="find">
      <span class="go" @click="back">
        <img src="../public/img/a6e.png" width="24">
      </span>
      <p class="inp">大家都在搜....</p>
      <span class="close" @click="closeRemove">
        <img src="../public/img/a6z.png" width="24">
      </span>
      </div>
    <div class="text">
      <p>
        <span class="item">按歌手搜索</span>
        <span class="icon">
          <img src="../public/img/acy.png" width="6">
        </span>
      </p>
      <p>
      </p>
    </div>
    <div class="hotSing">
      <span class="text">热门搜索</span>
      <div class="list">
        <span class="lis">李荣浩贝贝</span>
        <span class="lis">李荣浩贝贝</span>
        <span class="lis">李荣浩贝贝</span>
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
    back () {
      this.$router.go(-1)
    },
    closeRemove () {
      this.show = false
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .search
    position: fixed
    top: 0
    right: 0
    width: 100%
    height: 100%
    background: #fff
    .find
      display: flex
      position: relative
      top: 0px
      left: 0
      width: 100%
      height: 60px
      background: rgb(240, 116, 107)
      .go
        flex: 0 0 12px
        padding: 5px
        position: absolute
        top: 10px
        left: 10px
      .inp
        display: inline
        width: 75%
        height: 35px
        padding: 2px 0 0 8px
        position: absolute
        top: 10px
        left: 50px
        font-size: 12px
        line-height: 35px
        color: rgb(147, 153, 159)
        text-align: left
        border-bottom: 2px solid rgba(255, 255, 255, 0.1)
      .close
        flex: 0 0 12px
        padding: 5px
        margin-top: 5px
        position: absolute
        top: 10px
        right: 10px
    .text
      width: 100%
      padding: 12px 0 12px 10px
      text-align: left
      border-bottom: 1px solid rgba(147, 153, 159, 0.1)
      .item
        font-size: 12px
        font-weight: bold
        line-height: 24px
      .icon
        margin-left: 2px
        padding: 2px
    .hotSing
      width: 100%
      padding: 12px 0 12px 6px
      text-align: left
      border-bottom: 1px solid rgba(147, 153, 159, 0.1)
      .text
        font-size: 14px
        font-weight: bold
        line-height: 24px
        .list
          display: flex
          padding: 4px 8px
          .lis
            display: inline-block
            width: 50px
            height: 40px
</style>
