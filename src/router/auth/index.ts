import Register from '../../views/auth/Register.vue';

export default [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { auth: false },
  },
];
