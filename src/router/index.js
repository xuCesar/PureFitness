import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/page/IndexPage'
import LandingPage from '@/page/LandingPage'
import FromPage from '@/page/FromPage'
import ResultPage from '@/page/ResultPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      props (route) {
        return route.query || {}
      }
    },
    {
      path: '/landing',
      name: 'LandingPage',
      component: LandingPage,
      props (route) {
        return route.query || {}
      }
    },
    {
      path: '/form',
      name: 'FromPage',
      component: FromPage,
      props (route) {
        return route.query || {}
      }
    },
    {
      path: '/res',
      name: 'ResultPage',
      component: ResultPage,
      props (route) {
        return route.query || {}
      }
    },
    {
      path: '*',
      component: LandingPage,
      props (route) {
        return route.query || {}
      }
    }
  ]
})
