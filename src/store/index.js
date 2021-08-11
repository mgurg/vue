// import Vuex from 'vuex';
// import Vue from 'vue';
// import createPersistedState from "vuex-persistedstate";
// import auth from './modules/auth';

// // Load Vuex
// Vue.use(Vuex);
// // Create store
// export default new Vuex.Store({
//   modules: {
//     auth
//   },
//   plugins: [createPersistedState()]
// });

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        console.log(user);
        // user = {
        //   user: 'foo@bar.pl',
        //   password: 'bar',
        // };
        commit('auth_request');
        // axios({ url: 'http://imion.eu/idd/login',data: user, method: 'POST' })
        axios.post('https://imion.eu/idd/login',{},{ params: user})
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        console.log(user);

        commit('auth_request');
        axios({ url: 'https://imion.eu/idd/register', data: user, method: 'POST' })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
