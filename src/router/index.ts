import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import landingPage from './landing-page';
import auth from './auth';
import posts from './posts'

const routes: Array<RouteRecordRaw> = [
  ...landingPage,
  ...auth,
  ...posts
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
