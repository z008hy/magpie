import Vue from 'vue'
import Router from 'vue-router'
import Magpie from '@/components/Magpie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Magpie',
      component: Magpie
    }
  ]
})
