<template>
  <div>
    <div class="goods">
      <div class="menuWrapper" ref="menu">
        <ul>
          <li class="menuItem" v-for="(food, index) in foods" :class="{active: index === currentIndex}" @click="scrollToY(index) " :key="index">
            <div class="menuName border-1px">
              <span v-if="food.type>=0" class="icon" :class="classMap[food.type]"></span>
              <span class="name">{{food.name}}</span>
            </div>
            <div class="menuCount" v-show="food.totalCount">{{food.totalCount}}</div>
          </li>
        </ul>
      </div>
      <div class="goodsWrapper" ref="goods">
        <ul>
          <li v-for="(food,index) in foods" :key="index" ref="foodItems">
            <h2 class="title">{{food.name}}</h2>
            <div v-for="(item, index) in food.foods" :key="index" class="foodItem border-1px">
              <div class="icon">
                <img :src="item.icon" width="57">
              </div>
              <div class=content>
                <div class="name">{{item.name}}</div>
                <div v-show="item.description" class="desc"></div>
                <div class="rating">月售{{item.sellCount}}&nbsp;好评率{{item.rating}}%</div>
                <div class="price">
                  &yen;<span class="now">{{item.price}}</span><span class="oldPrice" v-show="item.oldPrice">&yen;{{item.oldPrice}}</span>
                </div>
                <div class="btnWrapper">
                  <control-btn :item ='item' @addCount="addCount" @descCount="descCount"></control-btn>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shopcart">
      <div class="content" @click="toggleCart" :class="{full:shopCartCount}">
        <div class="cart icon-shopping_cart">
          <div class="num" v-show="shopCartCount">{{shopCartCount}}</div>
        </div>
        <div class="price" :class="{full:shopCartCount}">&yen;{{totalPrice}}</div>
        <div class="delivery">另需配送费{{seller.deliveryPrice}}元</div>
      </div>
      <div class="buyBtn" :class="{enough: totalPrice >= seller.minPrice}">{{buyDesc}}</div>
      <div class="shopcartList" v-show="shopCart">
        <div class="header">
          <div class="title">购物车</div>
          <div class="empty" @click="emptyGoodList">清空</div>
        </div>
        <div class="listView" ref="cartlist">
          <ul>
            <li v-for="item in selectFoods" v-show="item.count >0" :key="item.name" class="listItem">
              <div class="name">{{item.name}}</div>
              <div class="price">&yen;<span class="big">{{item.price}}</span></div>
              <div class="btn">
                <control-btn :item="item" @addCount="addCount" @descCount="descCount"></control-btn>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="ballWrapper">
        <transition-group @before-enter="beforeDrop" @enter="dropActive">
          <div v-for="ball in balls" :data-index="ball.index" v-show="ball.show" :key="ball.index">
            <span class="info" v-show="ball.show"></span>
          </div>
        </transition-group>
      </div>
      <div class="background" v-show="shopCart" @click="hiddenCart"></div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {ControlBtn} from '../widget'
  export default{
    props: {
      classMap: {
        type: Array,
        required: true
      },
      seller: {
        type: Object,
        required: true
      }
    },
    created() {
      this.axios('/api/goods')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.foods = res.data
            this._initScroller()
          }
        })
    },
    data() {
      return {
        foods: [],
        listHeight: [],
        selectFoods: [],
        currentIndex: 0,
        cart: false,
        balls: [
          {show: false, index: 0},
          {show: false, index: 1},
          {show: false, index: 2},
          {show: false, index: 3},
          {show: false, index: 4}
        ]
      }
    },
    computed: {
      shopCartCount () {
        let result = 0
        for (let i = 0; i < this.selectFoods.length; i++) {
          result += this.selectFoods[i].count
        }
        return result
      },
      totalPrice () {
        let result = 0
        for (let i = 0; i < this.selectFoods.length; i++) {
          result += this.selectFoods[i].count * this.selectFoods[i].price
        }
        return result
      },
      buyDesc () {
        let minPrice = this.seller.minPrice
        let desc = `￥${minPrice}元起送`
        if (this.totalPrice >= minPrice) {
          desc = '立即购买'
        } else if (this.totalPrice > 0 && this.totalPrice < minPrice) {
          desc = `还差￥${minPrice - this.totalPrice}元`
        }
        return desc
      },
      shopCart () {
        if (!this.shopCartCount) {
          this.hiddenCart()
          return false
        }
        if (this.cart) {
          return this.cart
        }
      }
    },
    methods: {
      _calculateHeight (lis) {
        let height = 0
        this.listHeight.push(height)
        for (let index in lis) {
          height = height + lis[index].clientHeight
          this.listHeight.push(height)
        }
      },
      _initScroller() {
        this.$nextTick(() => {
          this.menuScroll = new BScroll(this.$refs.menu, {
            click: true
          })
          this.goodsScroll = new BScroll(this.$refs.goods, {
            click: true,
            probeType: 3
          })
//          console.log(this.$refs.foodItems)
          this._calculateHeight(this.$refs.foodItems)
          this.goodsScroll.on('scroll', ({y}) => {
//            console.log(y)
            let offsetY = parseInt(-y)
            for (let i = 0; i < this.listHeight.length; i++) {
              let height = this.listHeight[i]
              if (i + 1 === this.listHeight.length && offsetY >= height) {
                this.currentIndex = i
                break
              }
              let nextHeight = this.listHeight[i + 1]
              if (offsetY >= height && offsetY < nextHeight) {
                this.currentIndex = i
                break
              }
            }
          })
        })
      },
      scrollToY (index) {
        let offSetY = this.listHeight[index]
        this.goodsScroll.scrollTo(0, -offSetY, 500)
      },
      addCount (item) {
        if (!item.count && item.count !== 0) {
          this.$set(item, 'count', 1)
          this.selectFoods.push(item)
        } else {
            item.count++
        }
        this.refreshFoods(item)
      },
      descCount(item) {
       item.count = item.count < 1 ? 0 : item.count - 1
        this.refreshFoods(item)
      },
      emptyGoodList () {
        this.selectFoods.forEach(g => {
          g.count = 0
          this.refreshFoods(g)
        })
      },
      refreshFoods(item) {
        for (let i = 0; i < this.foods.length; i++) {
          let items = this.foods[i].foods
          let totalCount = 0
          for (let j = 0; j < items.length; j++) {
            let food = items[j]
            if (food.name === items.name && food.count !== item.count) {
              this.$set(food, 'count', item.count)
            }
            if (food.count) {
              totalCount += food.count
            }
            continue
          }
          this.$set(this.foods[i], 'totalCount', totalCount)
        }
      },
      toggleCart () {
        this.cart = !this.cart
        this.$nextTick(() => {
          this.carScroll = new BScroll(this.$refs.cartlist, {
            click: true
          })
        })
      },
      hiddenCart () {
        this.cart = false
      },
      drop (el) {
        if (!el) {
          return
        }
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            break
          }
        }
      },
      beforeDrop (el) {
        let index = parseInt(el.getAttribute('data-index'))
        let ball = this.balls[index]
        let target = ball.el
        let rect = target.getBoundingClientRect()
        let y = rect.top + 20
        el.style.transform = `translateX(${y}px)`
        let x = rect.left - 30
        let info = el.getElementsByClassName('info')[0]
        info.style.transform = `translate(${x}px)`
      },
      dropActive (el, done) {
        this.$nextTick(() => {
          let info = el.getElementsByClassName('info')[0]
          info.style.transform = `translateX(0)`
          el.addEventListener('transitionend', () => {
            console.log('end')
            done()
            let index = parseInt(el.getAttribute('data-index'))
            let ball = this.balls[index]
            ball.show = false
            el.style.display = 'none'
          })
        })
      }
    },
    components: {
      ControlBtn
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/scss/mixin"
  .goods
    position: fixed
    top: 174px
    bottom: 46px
    display: flex
    width: 100%
    .menuWrapper
      flex: 0 0 80px
      width: 80px
      overflow: hidden
      background: #f3f5f7
      .menuItem
        position: relative
        display: table
        padding: 0 12px
        width: 56px
        height: 54px
        font-size: 0
        &.active
          top: -1
          background: #fff
        .menuName
          display: table-cell
          vertical-align: middle
          line-height: 14px
          color: rgb(7, 17, 27)
          @include border-1px(rgba(7, 17, 27, 0.1))
          .name
            font-size: 12px
          .icon
            display: inline-block
            margin-top: 1px
            width: 12px
            height: 12px
            vertical-align: top
            background: url("../public/img/special_1@2x.png")
            @include map-icon("../public/img",3,12px 12px)
        .menuCount
          position: absolute
          right: 0
          top: 0
          width: 16px
          height: 16px
          border-radius: 50% 50% 50% 0
          font-size: 9px
          font-weight: bold
          text-align: center
          line-height: 16px
          color: #fff
          background: red
    .goodsWrapper
      flex: 1
      overflow: hidden
      .title
        padding-left: 14px
        height: 26px
        font-size: 12px
        line-height: 26px
        border-left: 2px solid #d9dde1
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .foodItem
        /*position: relative*/
        display: flex
        margin: 0 18px
        padding: 18px 0
        font-size: 0
        @include border-1px(rgba(7, 17, 27, 0.1))
        &.last-child
          @include border-none
        .icon
          margin-right: 10px
          flex: 0 0 57px
          width: 57px
        .content
          position: relative
          flex: 1
          .name
            margin-top: 2px
            font-size: 14px
            line-height: 14px
            color: rgb(7, 17, 27)
          .desc , .rating
            margin-top: 8px
            font-size: 10px
            line-height: 10px
            color: rgb(147,153,159)
          .price
            font-size: 10px
            line-height: 24px
            color: rgb(240, 20, 20)
            .now
              font-size: 14px
              font-weight: 700
            .oldPrice
              margin-left: 8px
              color: rgb(147, 153, 159)
              text-decoration: line-through
          .btnWrapper
            position: absolute
            right: 0
            bottom: 0
  .shopcart
    position: fixed
    display: flex
    bottom: 0
    left: 0
    width: 100%
    height: 46px
    background: #141d27
    .content
      flex: 1
      padding: 0 24px
      .cart
        position: relative
        margin-top: -12px
        margin-left: -12px
        display: inline-block
        width: 44px
        height: 44px
        font-size: 24px
        line-height: 44px
        text-align: center
        border: 6px solid #141d27
        border-radius: 50%
        color: rgba(255, 255, 255, 0.4)
        background: #36424d
        z-index: 20
        &.full
          background: rgb(0, 160, 220)
          color: #fff
        .num
          position: absolute
          right: -6px
          top: -6px
          width: 24px
          font-size: 9px
          font-weight: 700
          line-height: 16px
          border-radius: 12px
          background: rgb(240, 20, 20)
          color: #fff
      .price
        display: inline-block
        padding: 0 12px
        margin: 12px 0
        font-size: 16px
        font-weight: 700
        line-height: 22px
        color: rgba(255, 255, 255, 0.4)
        border-right: 1px solid rgba(255, 255, 255, 0.1)
        &full
          color: #fff
      .delivery
        display: inline-block
        margin-left: 12px
        font-size: 10px
        color: rgba(255, 255, 255, 0.4)
    .buyBtn
      flex: 0 0 105px
      width: 105px
      font-size: 12px
      font-weight: 700
      text-align: center
      line-height: 46px
      background: #2b333b
      color: #979a9c
      &.enough
        background: #2fca26
        color: #fff
    .shopcartList
      position: absolute
      left: 0
      top: 0
      width: 100%
      transform: translateY(-100%)
      z-index: 5
      .header
        padding: 0 18px
        height: 40px
        background: #f3f5f7
        .title
          display: inline-block
          font-size: 14px
          line-height: 40px
          font-weight: 200
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          line-height: 40px
          color: rgb(0, 160, 220)
      .listView
        padding: 0 18px
        max-height: 219px
        overflow: hidden
        font-size: 0
        background: #fff
        .listItem
          display: flex
          padding: 12px 0
          width: 100%
          @include border-1px(rgba(7, 17, 27, 0.1))
          .name
            flex: 1
            font-size: 14px
            line-height: 24px
            color: rgb(7, 17, 27)
          .price
            margin: 0 18px 0 12px
            font-size: 10px
            line-height: 28px
            color: rgb(240, 20, 20)
            .big
              font-size: 14px
              font-weight: 400
          .btn
            flex: 0 0 72px
            width: 72px
            padding-top: 2px
    .ballwrapper
      font-size: 0
      .ball
        position: fixed
        left: 0
        bottom: 20px
        width: 100%
        height: 16px
        z-index: 25
        transition: all .5s cubic-bezier(0.1,-0.5,0.5,0)
        .info
          position: absolute
          display: inline-block
          left: 32px
          height: 16px
          width: 16px
          border-radius: 50%
          background: rgb(240, 20, 20)
          transition: all .5s linear
  .background
    position: fixed
    left: 0
    top: 0
    bottom: 0
    width: 100%
    z-index: 3
    background: rgba(7, 17, 27, 0.6)
</style>
