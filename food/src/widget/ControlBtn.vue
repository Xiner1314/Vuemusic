<template>
  <div class="controlBtn">
    <transition name="move">
      <div v-show="item.count" @click="descCount" class="btn icon-remove_circle_outline"></div>
    </transition>
    <transition name="fade">
      <div v-show="item.count" class="count">{{item.count}}</div>
    </transition>
    <div @click="addCount" class="btn icon-add_circle"></div>
  </div>
</template>
<script>
  export default{
    name: 'ControlBtn',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        count: 0
      }
    },
    methods: {
      addCount() {
        this.$emit('addCount', this.item)
      },
      descCount() {
        this.$emit('descCount', this.item)
      }
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .controlBtn
    width: 72px
    text-align: right
    transition: all 0.5s linear
    .btn
      display: inline-block
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)
      transition: all 0.5s linear
      vertical-align: top
      &.move-leave-to, &.move-enter
        opacity: 0
        transform: translateX(36px) rotateZ(180deg)
    .count
      display: inline-block
      width: 24px
      font-size: 10px
      line-height: 24px
      text-align: center
      color: rgb(147, 153, 159)
      transition: all 0.5s linear
      &.fade-enter, &.fade-leave-to
        opacity: 0
</style>
