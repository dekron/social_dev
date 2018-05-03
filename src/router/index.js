import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Account from '@/components/Account'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
