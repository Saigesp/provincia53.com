import Vue from 'vue'
import Router from 'vue-router'
import AviatComponent from '@/components/AviatComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AviatComponent',
      component: AviatComponent
    }
  ]
})
