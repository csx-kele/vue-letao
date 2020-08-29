import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/tabbar/home.vue';
import mycar from '@/components/tabbar/mycar.vue';
import user from '@/components/tabbar/user.vue';
import newslist from '@/components/news/newslist.vue';
import electrical from '@/components/electrical/electrical.vue';
import goodsInfo from '@/components/goods/goodsInfo.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/mycar',
    component:mycar
  },
  {
    path: '/user',
    component:user
  },
  {
    path: '/newslist',
    component:newslist
  },
  {
    path: '/electrical',
    component:electrical
  },
  {
    path: '/goodsInfo',
    component:goodsInfo
  },

]

const router = new VueRouter({
  routes
})

export default router;
