<template>
  <div class="nav-music">
    <router-link  class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/friend">
      <span>朋友</span>
    </router-link>
    <router-link  class="tab-item" to="/radio">
      <span>电台</span>
    </router-link>
  </div>
</template>
<script>
export default{
  name: 'Tab'
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .nav-music
    display: flex
    position: fixed
    top: 44px
    left: 0
    width: 100%
    padding: 20px 0 40px 50px
    background: rgb(240, 116, 107)
    .tab-item
      flex: 1
      vertical-align: top
      padding-bottom: 3px
      color: rgba(255, 255, 255, 0.5)
      &.active
        span
          padding-bottom: 3px
          font-weight: bold
          color: #fff
          border-bottom: 2px solid #fff
</style>
