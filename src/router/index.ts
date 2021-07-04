import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import store from "@/store";

import landingPage from './landing-page';
import auth from './auth';
import posts from './posts'
import profile from "./profile"

const routes: Array<RouteRecordRaw> = [
  ...landingPage,
  ...auth,
  ...posts,
  ...profile
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  const loginRouteName = 'Login';
  if ((to.meta.auth === undefined || to.meta.auth) && !store.getters['token']) {
    if (from.name !== loginRouteName) {
      return router.push({ name: loginRouteName })
    }
    return false;
  }

  next();
});

export default router;
