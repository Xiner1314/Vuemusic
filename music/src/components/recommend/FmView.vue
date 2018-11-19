<template>
  <div class="fm">
    <p @click="back">&lt;返回</p>
    <p>私人FM</p>
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
  .fm
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 100
</style>
