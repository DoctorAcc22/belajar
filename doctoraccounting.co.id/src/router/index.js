// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// import Home from '../views/Home.vue'; // Import your components
// import AnotherComponent from '../views/AnotherComponent.vue';

// import Halaman2Component from '../components/Halaman2.vue'
import Halaman2Component from '../components/Halaman2.vue';

const routes = [
//   {
//     path: '/',
//     component: Home,
//   },
  {
    path: '/services',
    component: Halaman2Component,
  },
  // Define more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;