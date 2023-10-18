import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'
import ProgramingPage from './components/ProgramingPage.vue'
import EssaysPage from './components/EssaysPage.vue'
import ContactPage from './components/ContactPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/programing', component: ProgramingPage },
  { path: '/essays', component: EssaysPage },
  { path: '/essays/:essayName', component: () => import("./components/EssayDetailPage.vue") },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
