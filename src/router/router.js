import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';


const routes = [
  { path: '/', component: Accueil },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
