import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../views/default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/store')
    },
    {
      path: '/anime',
      name: 'anime',
      component: () => import('../views/anime')
    }
  ]
})
