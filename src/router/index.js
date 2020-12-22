import Vue from 'vue'
import Router from 'vue-router'
import blodList from '@/components/blodList'
import addBlod from '@/components/addBlod'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'blodList',
      component: blodList
    },
    {
      path:'/add',
      name:'addBlod',
      component:addBlod
    }
  ]
})
