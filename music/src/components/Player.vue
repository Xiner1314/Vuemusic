<template>
  <div class="player" @click="showView">
    <ul class="palyList">
      <li class="lisPlay">
         <div class="icon">
           <img :src="musicPlay[num].pic" width="57">
         </div>
         <h4 class="name" ref="name" >{{musicPlay[num].name}}-{{musicPlay[num].singer}}</h4>
         <audio class="audio" :src="musicPlay[num].url" controls autoplay="true" ref="audio">
         </audio><br/>
         <div class="btn">
           <button class="btn-play icon-play"  @click="player"></button>
           <button class="btn-stop icon-pause"  @click="pause"></button>
           <button class="btn-pre icon-prev" @click="pre"></button>
           <button class="btn-next icon-next"  @click="next"></button>
         </div>
      </li>
    </ul>
    <!--<PlaySongs :songs="songs" v-if="show"></PlaySongs>-->
  </div>
</template>
<script>
// import PlaySongs from './MyView/PlaySongs.vue'
export default{
  name: 'Player',
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      num: 0,
      show: false
    }
  },
  computed: {
    musicPlay: function () {
      let arr = []
      let arr1 = arr.concat(this.songs.url)
      arr1.push(this.songs[0])
      arr1.unshift(this.songs[this.songs.length - 1])
      return arr1
    }
  },
  methods: {
    player () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
      }
    },
    pause () {
      if (this.$refs.audio.played) {
        this.$refs.audio.pause()
      }
    },
    pre () {
      let music = this.musicPlay[this.num]
      this.num = (this.num + 2) % 20
      this.$refs.audio.src = music.url
      // this.$refs.name.innerHTML = music
      this.$refs.audio.play()
    },
    next () {
      let music = this.musicPlay[this.num]
      this.num = (this.num + 1) % 20
      this.$refs.audio.src = music.url
      // this.$refs.name.innerHTML = music
      this.$refs.audio.play()
      console.log(this.num)
    },
    showView () {
      this.show = true
    },
    closeS () {
      this.show = false
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
.player
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  overflow: auto
  background: #ccc
  .palyList
    .lisPlay
      .name
      .audio
      .btn
        display: flex
        position: relative
        left: 0
        bottom: 0
        margin-left: 5px
        box-sizing: border-box
</style>
