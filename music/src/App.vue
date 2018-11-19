<template>
  <div id="app">
    <div>
      <ele-header></ele-header>
      <tab></tab>
      <keep-alive>
        <router-view :hots="hots" :songs="songs"></router-view>
      </keep-alive>
      <!--<player :songs="songs"></player>-->
    </div>
  </div>
</template>

<script>
import EleHeader from './components/EleHeader'
import Tab from './components/Tab'
// import Player from './components/Player'
export default {
  name: 'App',
  created () {
    this.axios('/api/hot')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.hots = res.data
          // console.log(this.hots)
        }
      })
    this.axios('/api/songs')
      .then(res => {
        res = res.data
        if (res.errno === 0) {
          this.songs = res.data
          // console.log(this.songs)
        }
      })
  },
  data () {
    return {
      hots: {},
      songs: [],
      show: false
    }
  },
  components: {
    EleHeader,
    Tab
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
#app
  position: fixed
  top: 0
  left: 0
  height: 100%
  width: 100%
  overflow: hidden

</style>
