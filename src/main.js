import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

import Trend from 'vuetrend';
import VueMeta from 'vue-meta';

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token}

//Vue Charts
Vue.use(Chartkick.use(Chart));

// Vue trend
Vue.use(Trend);

// Vue Meta
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

//

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
