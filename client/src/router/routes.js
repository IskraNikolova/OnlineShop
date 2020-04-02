
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/privacy',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/privacy', component: () => import('pages/Privacy.vue') }
    ]
  },
  {
    path: '/details',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/details', component: () => import('pages/Details.vue') }
    ]
  },
  {
    path: '/bag',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/bag', component: () => import('pages/Bag.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
