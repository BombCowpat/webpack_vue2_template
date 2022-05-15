export default [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/home/index.vue') },
  { path: '/canvas-1', component: () => import('@/views/canvas/canvas1.vue') },
  { path: '/request', component: () => import('@/views/request/index.vue') }
]
