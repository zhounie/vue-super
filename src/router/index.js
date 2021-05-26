import { createRouter, createWebHistory } from 'vue-router'
import person from './person'
import settings from './settings'

const routerHistory = createWebHistory()

const router = createRouter({
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
                },
                ...person,
                ...settings
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/login/index.vue')
        },
    ]
})
export default router
