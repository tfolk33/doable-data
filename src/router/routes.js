
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageLanding.vue') },
      { path: '/demo', component: () => import('pages/PageCore.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/repair', component: () => import('src/pages/PageRepair.vue') },
      { path: '/agreement', component: () => import('pages/PageAgreement.vue') },
      { path: '/technician', component: () => import('pages/PageTechnician.vue') }
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
