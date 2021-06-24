import List from '@/views/posts/List.vue'
import Post from '@/views/posts/Post.vue';
import Editor from '@/views/posts/Editor.vue';

export default [
  {
    path: '/posts',
    name: 'PostList',
    component: List,
    meta: { auth: false },
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: Post,
    meta: { auth: false },
  },
  {
    path: '/posts/editor',
    name: 'PostEditor',
    component: Editor,
  }
];