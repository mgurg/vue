import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import authModule from './modules/auth/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
  },
  plugins: [createPersistedState()],
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    // ---------
    gender: 'f',
    name: '',
    page: 0,
    rows: 10,
    total: null,
    favourites: [],
  },
  mutations: {
    set_gender(state, payload) {
      state.gender = payload;
    },
    set_favourites(state, payload) {
      state.favourites = payload;
    },
    set_total(state, payload) {
      state.total = payload;
    },
    increase_page(state) {
      state.page += 1;
    },
    decrease_page(state) {
      state.page -= 1;
    },
    store_name(state) {
      state.gender = 'Adam';
    },
    set_page(state, payload) {
      state.page = payload;
    },
    // ---------
    // auth_request(state) {
    //   state.status = 'loading';
    // },
    // auth_success(state, token, user) {
    //   state.status = 'success';
    //   state.token = token;
    //   state.user = user;
    // },
    // auth_error(state) {
    //   state.status = 'error';
    // },
    // logout(state) {
    //   state.status = '';
    //   state.token = '';
    // },
  },
  actions: {
    set_gender(context, payload) {
      context.commit('set_gender', payload);
    },
    set_favourites(context, payload) {
      context.commit('set_favourites', payload);
    },
    set_total(context, payload) {
      context.commit('set_total', payload);
    },
    increase_page(context) {
      context.commit('increase_page');
    },
    decrease_page(context) {
      context.commit('decrease_page');
    },
    store_name(context) {
      context.commit('store_name');
    },
    set_page(context, payload) {
      context.commit('set_page', payload);
    },
    // ---------
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        console.log(user);
        // user = {
        //   user: 'foo@bar.pl',
        //   password: 'bar',
        // };
        commit('auth_request');
        // axios({ url: 'http://imion.eu/idd/login',data: user, method: 'POST' })
        axios
          .post('https://imion.eu/idd/login', {}, { params: user })
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
    getGender: (state) => state.gender,
    getPage(state) {
      return state.page;
    },
    getRows(state) {
      return state.rows;
    },
    getTotal(state) {
      return state.total;
    },
    getFavourites(state) {
      return state.favourites;
    },
    // ---------
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
