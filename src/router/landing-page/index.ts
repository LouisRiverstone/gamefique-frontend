import Home from '../../views/landing-page/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { auth: false },
  },
];
