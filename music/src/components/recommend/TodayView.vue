<template>
  <div class="today">
    <p @click="back">&lt;返回</p>
    <span>每日推荐</span>
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
  .today
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    z-index: 100
    background: #fff
</style>
