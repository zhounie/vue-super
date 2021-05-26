export default [
    { path: 'person', redirect: '/layout/person/index' },
    { path: 'person/index', component: () => import('@/views/person/person.vue') },
    { path: 'person/department', component: () => import('@/views/person/department.vue') }
]