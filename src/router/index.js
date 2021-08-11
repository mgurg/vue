// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'

import Home from '../components/Home.vue';
import Favourites from '../components/Favourites.vue';
import Details from '../components/Details.vue';
import Names from '../components/Names.vue';
import About from '../components/About.vue';
import Secure from '../components/Secure.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import RemindPass from '../components/RemindPass.vue';
// import Layout from './components/Layout.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/favourites', component: Favourites, name: 'favourites' },
  { path: '/details', component: Details, name: 'details' },
  { path: '/names', component: Names, name: 'names' },
  { path: '/about', component: About, name: 'about' },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/remindPassword',
    name: 'RemindPass',
    component: RemindPass,
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure,
    meta: {
      requiresAuth: true,
    },
  },
];



const router = new VueRouter({ mode: 'history', routes });

console.log("Is logged: " + store.getters.isLoggedIn);
router.beforeEach((to, from, next) => {
  if(to.matched.some(routes => routes.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router;
