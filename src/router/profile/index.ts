import Profile from "@/views/user/Profile.vue"

export default [
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/profile/:id',
    name: 'ProfileOthers',
    component: Profile,
    meta: { auth: false },
  },

];
