import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../views/default'
import homePage from '../layout/homePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      redirect: '/default',
      children: [
        {
          path: '/default',
          name: 'default',
          component: defaultPage
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
        },
        {
          path: '/guestbook',
          name: 'guestbook',
          component: () => import('../views/guestbook')
        }
      ]
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: () => import('../layout/aboutMe')
    }
  ]
})
