import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      component: () => import('../views/home.vue'),
   },
   {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'),
   },
   {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/login.vue'),
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404.vue'),
   },
];

export const router = createRouter({
   history: createWebHistory(),
   routes,
});
