// router.js

import Home from './components/Home.vue';
import Favourites from './components/Favourites.vue';
import Details from './components/Details.vue';
import Names from './components/Names.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/favourites', component: Favourites, name: 'favourites' },
    { path: '/details', component: Details, name: 'details' },
    { path: '/names', component: Names, name: 'names' },
];

export default routes;