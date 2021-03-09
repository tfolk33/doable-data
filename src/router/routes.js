
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageLanding.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/form', component: () => import('pages/PageForm.vue') },
      { path: '/data', component: () => import('pages/PageData.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
