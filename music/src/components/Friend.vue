<template>
  <div class="friend">
    <p @click="back">&lt;返回</p>
    <span class="text">朋友</span>
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
.friend
  position: fixed
  top: 119px
  left: 0
  width: 100%
  height: 100%
  background: #fff
  z-index: 1000
  .text
    display: inline-block
    font-size: 20px
    line-height: 24px
    font-weight: 200
    color: black
</style>
