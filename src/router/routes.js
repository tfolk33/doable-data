
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageLanding.vue') },
      { path: '/demo', component: () => import('pages/PageCore.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
<<<<<<< HEAD
      { path: '/repair', component: () => import('pages/PageForm.vue') },
      { path: '/agreement', component: () => import('pages/PageAgreement.vue') }
=======
      { path: '/form', component: () => import('pages/PageForm.vue') }
>>>>>>> 6e4c2b8d5c0b2670594323d7558cbfb21784f6b7
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
