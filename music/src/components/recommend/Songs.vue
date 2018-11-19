<template>
 <div>
   <div class="songs">
     <div class="header">
       <div class="songsTop">
        <span class="img" @click="$emit('close')">
          <img src="./a6e.png" alt="" width="25">
        </span>
         <div class="line">
           <span class="title">歌单</span>
         </div>
       </div>
       <div class="songsView">
        <span class="icon">
          <img :src="hots.songListPic" alt="" width="100">
        </span>
         <div class="content">
           <span class="text">{{hots.songListName}}</span>
           <span class="description">{{hots.songListDescription}}</span>
         </div>
       </div>
     </div>
     <div class="songsList">
       <div class="listView">
         <ul class="ulView">
           <li v-for="(item, index) in songs" :key="index" class="lisCount">
             <div class="list">
               <span class="icon">
                <img :src="item.pic" alt="" width="57">
               </span>
               <div class="content">
                 <span class="idView">{{item.id}}</span>
                 <span class="name">{{item.name}}</span>
                 <span class="singer">{{item.singer}}</span>
                 <span class="url">
                   <audio controls="controls"
                          preload=""
                          :src="item.url">
                   </audio>
                 </span>
               </div>
             </div>
           </li>
         </ul>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
export default{
  name: 'Songs',
  created () {
    this.axios('/api/songs')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.songs = res.data
          console.log(this.songs)
        }
      })
  },
  props: {
    hots: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      count: 0,
      songs: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .songs
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 100
    overflow: auto
    box-sizing: border-box
    .header
      position: relative
      left: 0
      top: 0
      width: 100%
      padding: 18px 0
      background: rgba(0, 0, 0, 0.5)
      .songsTop
        display: flex
        white-space: nowrap
        vertical-align: middle
        height: 40px
        .img
          margin-left: 10px
          width: 25px
          height: 25px
          img
        .line
          width: 80%
          display: inline-block
          @include border-1px(rgba(255, 255, 255, 0.2))
          .title
            padding: 2px 0
            margin-left: 10px
            font-size: 20px
            line-height: 40px
            color: #fff
      .songsView
        display: flex
        width: 100%
        .icon
          flex: 0 0 100px
          width: 100px
          padding-left: 15px
          vertical-align: middle
          img
            padding-top: 20px
            width: 100px
            height: 100px
        .content
          flex: 1
          position: relative
          left: 0
          top: 15px
          padding-left: 8px
          text-align: center
          .text
            display: inline-block
            font-size: 14px
            line-height: 24px
            color: #fff
          .description
            display: inline
            position: absolute
            left: 0
            top: 35px
            font-size: 14px
            line-height: 24px
            text-align: left
            text-indent: 2em
            color: #fff
    .songsList
      position: relative
      left: 0
      top: 0
      width: 100%
      .listView
        padding: -10px
        .ulView
          display: table-cell
          list-style: none
          -webkit-padding-start: 0
          .lisCount
            position: relative
            width: 100%
            padding: 18px 0
            background: rgba(147, 153, 159, 0.2)
            @include border-1px(rgba(147, 153, 159, 0.4))
            .list
              display: flex
              vertical-align: bottom
              .icon
                flex: 0 0 57px
                position: relative
                left: 10px
                top: 20px
                padding: -5px
                vertical-align: top
                img
                  width: 57px
                  height: 57px
              .content
                position: relative
                flex: 1
                padding: 4px 0 6px 6px
                font-size: 14px
                line-height: 14px
                .idView
                  position: relative
                  left: 10px
                  top: 4px
                  color: rgba(7, 17, 27, 0.5)
                .name
                  position: relative
                  left: 5px
                  top: 4px
                  color: rgba(7, 17, 27, 0.5)
                .singer
                  position: relative
                  left: 5px
                  top: 4px
                  color: rgba(7, 17, 27, 0.5)
                .url
                  position: relative
                  left: 5px
                  bottom: -10px
                  audio
                    position: relative
                    left: 5px
                    bottom: 0

</style>
