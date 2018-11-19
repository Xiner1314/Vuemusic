<template>
  <div class="songView">
    <p @click="back">&lt;返回</p>
    <span>排行榜</span>
  </div>
</template>
<script>
export default{
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .songView
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 100
</style>
