import { createRouter, createWebHistory } from 'vue-router'



const routerHistory = createWebHistory()

export default createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/layout',
            component: () => import('@/views/layout/index.vue'),
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('@/views/home/index.vue'),
                    meta: { hideMenu: true }
                }, {
                    path: 'settings',
                    name: 'settings',
                    component: () => import('@/views/settings/index.vue'),
                    children: [
                        { path: 'app', component: () => import('@/views/settings/pages/app.vue') },
                        { path: 'company', component: () => import('@/views/settings/pages/company.vue') }
                    ]
                }, {
                    path: 'fire',
                    name: 'fire',
                    component: () => import('@/views/fire/index.vue')
                }, {
                    path: 'person',
                    name: 'person',
                    component: () => import('@/views/person/index.vue'),
                    children: [
                        { path: 'index', component: () => import('@/views/person/pages/person.vue') },
                        { path: 'department', component: () => import('@/views/person/pages/department.vue') }
                    ]
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/login/index.vue')
        },
    ]
})

