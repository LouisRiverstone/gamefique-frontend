import Register from '../../views/auth/Register.vue';
import Login from '../../views/auth/Login.vue';

export default [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { auth: false },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { auth: false },
  },
];
