<template>
<div class="musicMenu">
  <ul class="ulList">
    <li class="lis" v-for="(list, index) in lists" :key="index">
      <img :src="list.coverImgUrl" alt="" width="127">
      <p>{{list.title}}</p>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  props: {
    lists: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .musicMenu
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
