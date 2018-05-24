import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/page/LandingPage'
import FromPage from '@/page/FromPage'
import ResultPage from '@/page/ResultPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/form',
      name: 'FromPage',
      component: FromPage
    },
    {
      path: '/res',
      name: 'ResultPage',
      component: ResultPage
    },
    {
      path: '*',
      component: LandingPage
    }
  ]
})
