import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import Axios from 'axios';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

import VueMeta from 'vue-meta';

// import VueQrcodeReader from "vue-qrcode-reader";
// Vue.use(VueQrcodeReader);

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token}

//Vue Charts
Vue.use(Chartkick.use(Chart));

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
