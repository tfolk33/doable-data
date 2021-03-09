
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageLanding.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/dashboard/:uid', component: () => import('src/pages/Dashboard/Dashboard.vue') },
      { path: '/dashboard/:uid/data/:formId', component: () => import('src/pages/Dashboard/FormData.vue') },
      { path: '/forms/:uid/ski-repair', component: () => import('src/pages/forms/SkiRepair.vue') },
      { path: '/forms/:uid/ski-rental-agreement', component: () => import('src/pages/forms/SkiRentalAgreement.vue') },
      { path: '/forms/:uid/ski-bindings-work-order', component: () => import('src/pages/forms/SkiBindingsWorkOrder.vue') }
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
