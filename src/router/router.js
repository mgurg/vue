// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store.js'

import Favourites from '../pages/Favourites.vue';
import Details from '../pages/Details.vue';
import Names from '../pages/Names.vue';
// import Secure from '../components/Secure.vue';
// import Login from '../components/Login.vue';
// import Register from '../components/Register.vue';
// import RemindPass from '../components/RemindPass.vue';
// import About from '../components/About.vue';

const Login = () => import('../components/Login.vue');
const Register = () => import('../components/Register.vue');
const RemindPass = () => import('../components/RemindPass.vue');
const Secure = () => import('../components/Secure.vue');
const About = () => import('../pages/About.vue');

function lazyLoad(view){
  return() => import(`@/pages/${view}.vue`)
  
  // import Home from '../pages/Home.vue';
  // import Layout from './pages/Layout.vue'
}

Vue.use(VueRouter);

const routes = [
  { path: '/', component: lazyLoad('Home'), name: 'home' },
  { path: '/names', component: Names, name: 'names' },
  { path: '/imie/:name', component: Details, name: 'details' },
  { path: '/favourites', component: Favourites, name: 'favourites' },
  { path: '/details/:id', component: Details, name: 'details', props: true },
  { path: '/about', component: About, name: 'about' },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresNoAuth: true,
    },
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
  { path: '/:notFound(.*)', redirect: '/'},
];



const router = new VueRouter({ mode: 'history', routes });

console.log("Is logged: " + store.getters.isLoggedIn);
router.beforeEach((to, _from, next) => {
  if(to.meta.requiresAuth && !store.getters.isAuthenticated){
    next('/login');
  } else if (to.meta.requiresNoAuth && store.getters.isAuthenticated) {
    next('home');
  } else{
    next();
  }
  // if(to.matched.some(routes => routes.meta.requiresAuth)) {
  //   if (store.getters.isLoggedIn) {
  //     next()
  //     return
  //   }
  //   next('/login')
  // } else {
  //   next()
  // }
})

export default router;
