import Vue from 'vue'
import App from './App'
import router from './router'

import VueMouseParallax from 'vue-mouse-parallax'
Vue.use(VueMouseParallax)

import './assets/styles/reset.scss';
import './assets/styles/flexbox.scss';
import './assets/styles/fonts.scss';
import './assets/styles/main.scss';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
