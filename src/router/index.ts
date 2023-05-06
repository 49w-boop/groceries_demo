import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
