
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageLanding.vue') },
      { path: '/demo', component: () => import('pages/PageCore.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/form3', component: () => import('pages/Form3/Form3.vue') }
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
