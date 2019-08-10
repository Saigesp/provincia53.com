import Vue from 'vue'
import Router from 'vue-router'
require('../views')

Vue.use(Router)

var ComponentFactory = htmltag => { return { template: '<'+htmltag+'/>' }}

export default new Router({
  routes: [
    { path: '/',                name: 'aviat-app',                   component: ComponentFactory('aviat-app') }
  ]
})
