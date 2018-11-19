<template>
<div class="today-first">
  <ul class="ulList">
    <li class="lis" v-for="(item, index) in mv" :key="index">
      <img :src="item.pic" alt="" width="127">
      <p>{{item.name}}</p>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  name: 'TodayFirst',
  props: {
    mv: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
.today-first
  width: 100%
  margin-bottom: 20px
  .ulList
    width: 100%
    display: flex
    flex-flow: row wrap
    align-content: space-between
    padding-left: 10px
    .lis
      width: 30%
      padding-right: 5px
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
      margin-top: 10px
      img
        width: 100%
      p
        font-size: 14px
        line-height: 24px
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden
</style>
