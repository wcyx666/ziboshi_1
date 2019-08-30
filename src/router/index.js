import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Column from '@/components/column'
import Activity from '@/components/activity'
import Speak from '@/components/speak'
import Special from '@/components/special'
import SPeakMenu from '@/components/speak_menu'
import Search from '@/components/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"*",
      redirect:"/front"
    },
    {
      path: '/front',
      name: 'Home',
      component: Home,
      meta:{
        title:"首页"
      }
    },
    {
      path: '/column',
      name: '一级菜单',
      component: Column,
      children:[
        {
          path: '/special',
          name: '二级菜单',
          component: Special
        },
        {
          path: '/speak',
          name: '三级菜单',
          component: Speak,
        },
        {
          path: '/activity',
          name: '文章详情',
          component: Activity,
        },
        {
          path: '/speaks',
          name: '文章详情',
          component: SPeakMenu,
        },
      ]
    },
    {
      path: '/search',
      name: '搜索列表',
      component: Search,
    },
  ]
})
