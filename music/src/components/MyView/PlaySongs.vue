<template>
<div class="playSong">
  <ul>
    <li ref="list" v-for="(item, index) in songs" :key="index">
      <p>
        <img :src="songs.pic" alt="">
      </p>
      <p>{{songs.name}}-{{songs.singer}}</p>
      <audio :src="songs.url" controls autoplay="false"></audio>
      <p ref="list" @click="lrcSongs">{{songs.lrc}}</p>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  name: 'PlaySongs',
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      times: [],
      lrcData: {}
    }
  },
  methods: {
    lrcSongs () {
      this.$refs.list.forEach(function (val, index) {
        let arr = val.match(/\[(.+)\](.+)?/)

        this.times[index] = arr[1]
        this.lrcData[arr[1]] = arr[2] ? arr[2] : ''
      })
    }
  }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .playSong
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #fff
</style>
