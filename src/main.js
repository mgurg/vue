import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes';

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import Trend from "vuetrend"

Vue.use(VueRouter)
Vue.use(Chartkick.use(Chart))
Vue.use(Trend)

Vue.config.productionTip = false

const router = new VueRouter({mode: 'history', routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
