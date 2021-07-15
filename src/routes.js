// router.js

import Home from './components/Home.vue';
import Favourites from './components/Favourites.vue';
import Details from './components/Details.vue';
import Names from './components/Names.vue';
import About from './components/About.vue';
// import Layout from './components/Layout.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/favourites', component: Favourites, name: 'favourites' },
  { path: '/details', component: Details, name: 'details' },
  { path: '/names', component: Names, name: 'names' },
  { path: '/about', component: About, name: 'about' },
  // { path: '/layout', component: Layout, name: 'layout' },
];

export default routes;
