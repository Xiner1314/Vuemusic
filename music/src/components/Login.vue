<template>
  <div class="login">
    <p class="text">
      登录网易云音乐<br/>
      手机电脑多端同步，尽享海量高品质音乐
    </p>
    <button class="btn" @click="login">立即登录</button>
  </div>
</template>
<script>
export default{
  methods: {
    login () {
      this.$emit('login-event')
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .login
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 140px
    background: rgb(7, 17, 27)
    .text
      padding: 8px 12px 4px 12px
      font-size: 14px
      line-height: 24px
      color: #fff
      text-align: center
    .btn
      position: relative
      left: 50%
      margin-left: -50px
      margin-top: 20px
      display: inline-block
      padding: 5px
      width: 100px
      border: 1px solid rgba(255, 255, 255, 0.8)
      background: black
      color: #fff
</style>
