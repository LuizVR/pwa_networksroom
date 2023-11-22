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
    component: () => import('../views/Users.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/registerRoom',
    component: () => import('../views/RegisterRoom.vue')
  },
  {
    path: '/camarita',
    component: () => import('../views/Camara.vue')
  }
]
});

export default router