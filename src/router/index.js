import { createRouter, createWebHistory } from 'vue-router'; 
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(),
  routes : [{
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/personas',
    component: () => import('../views/Personas.vue')
  }
]
});

export default router