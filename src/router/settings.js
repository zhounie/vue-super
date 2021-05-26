export default [
    { path: 'settings', redirect: '/layout/settings/app' },
    { path: 'settings/app', component: () => import('@/views/settings/app.vue') },
    { path: 'settings/company', component: () => import('@/views/settings/company.vue') }
]