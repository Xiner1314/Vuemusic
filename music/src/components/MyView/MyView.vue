<template>
 <div class="my-view">
   我的音乐
 </div>
</template>
<script>
export default{
  name: 'MyView',
  data () {
    return {
      showSheetList: true
    }
  },
  methods: {
    // 列表内容折叠
    toggoleList () {
      this.showSheetList = !this.showSheetList
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
</style>
