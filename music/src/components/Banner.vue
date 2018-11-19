<template>
  <div class="box">
    <div class="bBox"></div>
    <div @mouseenter="endInterval" @mouseleave="startInterval" class="container">
      <div :style="{width:wrap_width+'px', height:wrap_height+'px', left:offset_left+'px'}" class="banner-wrap">
        <div class='img' v-for="(item, index) in banner" :key="index">
          <img :src="item.img" alt="" width="365" height="164">
        </div>
      </div>
      <div class="bottom">
        <ul class="pointContainer">
          <li @click="changeIndex(index)" :class="{point: true, active: nowIndex === index}" v-for="(point,index) in length" :key="index"></li>
        </ul>
      </div>
      <div @click="pre" class="click pre">&lt;</div>
      <div @click="next" class="click next">&gt;</div>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    imgs: {
      type: Array,
      /* eslint-disable */
      default: []
    },
    width: {
      type: Number,
      default: 460
    },
    height: {
      type: Number,
      default: 250
    }
  },
  mounted () {
    this.startInterval()
  },
  data () {
//    console.log(this.width)
    return {
      length: new Array(this.imgs.length),
      nowIndex: 0,
      wrap_width: this.width * (this.imgs.length + 2),
      wrap_height: this.height,
      offset_left: -this.width,
      isTransition: true,
      timer: null,
      animateFlag: true,
      timerAuto: null
    }
  },
  computed: {
    banner: function () {
      let arr = []
      let arr1 = arr.concat(this.imgs)
      arr1.push(this.imgs[0])
      arr1.unshift(this.imgs[this.imgs.length - 1])
      return arr1
    }
  },
  methods: {
    pre () {
      if (this.nowIndex === 0) {
        if (!this.animateFlag) {
          clearInterval(this.timer)
          this.animateFlag = true
          this.offset_left = -(this.length.length) * this.width
        }
        this.animate(-this.width, 0, function (that) {
          that.offset_left = -(that.length.length) * that.width
        })
        this.nowIndex = this.imgs.length - 1
        return
      } else {
        if (!this.animateFlag) {
          this.animateFlag = true
          clearInterval(this.timer)
          this.offset_left = -(this.nowIndex * this.width)
        }
        this.animate(-(this.nowIndex + 1) * this.width, -(this.nowIndex * this.width))
      }
      this.nowIndex -= 1
    },
    startInterval () {
      this.timerAuto = setInterval(this.next, 2000)
    },
    endInterval () {
//       console.log("leave");
      clearInterval(this.timerAuto)
    },
    next () {
      if (this.nowIndex === this.length.length - 1) {
        if (!this.animateFlag) {
          this.animateFlag = true
          clearInterval(this.timer)
          this.offset_left = -this.width
        }
        this.animate(-(this.length.length) * this.width, -(this.length.length + 1) * this.width, function (that) {
          that.offset_left = -that.width
        })
        this.nowIndex = 0
        return this.nowIndex
      } else {
        if (!this.animateFlag) {
          this.animateFlag = true
          clearInterval(this.timer)
          this.offset_left = -(this.nowIndex + 2) * this.width
        }
        this.animate(-(this.nowIndex + 1) * this.width, -(this.nowIndex + 2) * this.width)
        this.nowIndex += 1
      }
    },
    animate (start, end, fuc) {
      let distance = end - start
      let pre = distance / 50
      let that = this
      this.timer = setInterval(function () {
        that.animateFlag = false
        if (Math.abs(end - that.offset_left) <= Math.abs(pre)) {
          that.offset_left = end
          if (fuc) {
            fuc(that)
          }
          that.animateFlag = true
          clearInterval(that.timer)
          that.timer = null
          return
        }
        that.offset_left += pre
      }, 1)
    },
    changeIndex (index) {
      clearInterval(this.timer)
      this.animate(-(this.nowIndex + 1) * this.width, -(index + 1) * this.width)
      this.nowIndex = index
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .box
    position: relative
    width: 100%
    height: 200px
    .bBox
      width: 100%
      height: 150px
      background: rgb(240, 116, 107)
    .container
      position: absolute
      left: 2%
      top: 20px
      width: 96%
      height: 164px
      margin: 0 auto
      border-radius: 12px
      overflow: hidden
      .banner-wrap
        /*width: 1000%*/
        position: absolute
        top: 0
        margin: 0 auto
        border-radius: 5px
        z-index: 1
        .transition
          transition: 0.5s
        .img
          /*width: 10%*/
          float: left
          display: inline
          img
            width: 100%
            height: 164px
      .click
        width: 20px
        background-color: rgba(255,255,255,.3)
        color: aliceblue
        font-size: 13px
        font-weight: bold
        position: absolute
        height: 40px
        line-height: 40px
        margin-top: -20px
        text-align: center
        top: 50%
        cursor: pointer
        z-index: 2
      .pre
        left: 0
      .next
        right: 0
      .bottom
        position: absolute
        bottom: 0
        width: 100%
        height: 20px
        text-align: center
        z-index: 2
        .pointContainer
          height: 20px
          .point
            display: inline-block
            border: 5px solid #eeeeee
            border-radius: 5px
            line-height: 0
            margin-right: 3px
            .active
              border: 5px solid #42b983
</style>
