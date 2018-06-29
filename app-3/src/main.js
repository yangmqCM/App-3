// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { Swipe,SwipeItem } from 'vue-swipe'
import './assets/style.css' 
Vue.config.productionTip = false

Vue.use(VueResource);
/* eslint-disable no-new */
Vue.component('swipe',Swipe)
Vue.component('swipe-item',SwipeItem)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
