import Vue from 'vue'
import Router from 'vue-router'
require('../views')

Vue.use(Router)

var ComponentFactory = htmltag => { return { template: '<'+htmltag+'/>' }}

export default new Router({
  routes: [
    { path: '/',                      name: 'home',                   component: ComponentFactory('home-app') },
    { path: '/intro',                 name: 'intro-page',             component: ComponentFactory('intro-page') },
    { path: '/el-proyecto',           name: 'project-page',           component: ComponentFactory('project-page') },
    { path: '/quienes-somos',         name: 'about-page',             component: ComponentFactory('about-page') },
    { path: '/guia-personajes',       name: 'characters-page',        component: ComponentFactory('characters-page') },
    { path: '/referencias',           name: 'referrers-page',         component: ComponentFactory('referrers-page') },
    { path: '/informes-policiales',   name: 'basiri-page',            component: ComponentFactory('basiri-page') },
    { path: '/mapa',                  name: 'map-page',               component: ComponentFactory('map-page') },
    { path: '/contacto',              name: 'contact-page',           component: ComponentFactory('contact-page') },
  ]
})
