import Vue from 'vue'
import Router from 'vue-router'

import myMusic from '../components/MyMusic.vue'
import Search from '../components/Search.vue'
import Recommend from '../components/Recommend.vue'
import RadioStation from '../components/RadioStation.vue'
import Friend from '../components/Friend.vue'
import FmView from '../components/recommend/FmView.vue'
import ListView from '../components/recommend/ListView.vue'
import Songs from '../components/recommend/Songs.vue'
import TodayView from '../components/recommend/TodayView.vue'
import MyNews from '../widget/MyNews.vue'
import Vip from '../widget/Vip.vue'
import ShoppingMall from '../widget/ShoppingMall.vue'
import Game from '../widget/Game.vue'
import FreeFlow from '../widget/FreeFlow.vue'
import MyFriend from '../widget/MyFriend.vue'
import NearPeople from '../widget/NearPeople.vue'
import Personality from '../widget/Personality.vue'
import Listening from '../widget/Listening.vue'
import StopTime from '../widget/StopTime.vue'
import Scan from '../widget/Scan.vue'
import MusicClock from '../widget/MusicClock.vue'
import ControlMode from '../widget/ControlMode.vue'
import ParentChild from '../widget/ParentChild.vue'
import Coupon from '../widget/Coupon.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/myMusic', name: 'myMusic', component: myMusic},
    {path: '/search', name: 'Search', component: Search},
    {path: '/recommend',
      name: 'recommend',
      component: Recommend,
      children: [
        {path: '/fm', name: 'fm', component: FmView},
        {path: '/list', name: 'list', component: ListView},
        {path: '/songs', name: 'songs', component: Songs},
        {path: '/today', name: 'today', component: TodayView}
      ]
    },
    {path: '/radio', name: 'radio', component: RadioStation},
    {path: '/friend', name: 'friend', component: Friend},
    {path: '/myNews', name: 'myNews', component: MyNews},
    {path: '/vip', name: 'vip', component: Vip},
    {path: '/shopping', name: 'shopping', component: ShoppingMall},
    {path: '/game', name: 'game', component: Game},
    {path: '/free', name: 'free', component: FreeFlow},
    {path: '/myFriend', name: 'myFriend', component: MyFriend},
    {path: '/near', name: 'near', component: NearPeople},
    {path: '/person', name: 'person', component: Personality},
    {path: '/listen', name: 'listen', component: Listening},
    {path: '/stop', name: 'stop', component: StopTime},
    {path: '/scan', name: 'scan', component: Scan},
    {path: '/mClock', name: 'mClock', component: MusicClock},
    {path: '/cMode', name: 'cMode', component: ControlMode},
    {path: '/pChild', name: 'pChild', component: ParentChild},
    {path: '/coupon', name: 'coupon', component: Coupon}
  ],
  linkActiveClass: 'active'
})
