import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      component: () => import('../layouts/index.vue'),
      children: [
         {
            path: '',
            name: 'home',
            component: () => import('../views/home.vue'),
         },
         {
            path: 'about',
            name: 'about',
            component: () => import('../views/about.vue'),
         },
      ],
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
