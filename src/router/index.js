import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/layout'
        },
        {
            path: '/layout',
            name: 'layout',
            component: () => import('@/views/layout/index.vue'),
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('@/views/home/index.vue'),
                    meta: { hideMenu: true }
                },
                {
                    path: '404',
                    name: 'NotFound',
                    meta: {
                        needLogin: false
                    },
                    component: () => import('@/views/404/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/login/index.vue')
        },
        {
            path: '/404',
            name: '404',
            meta: {
                needLogin: false
            },
            component: () => import('@/views/404/index.vue')
        }
    ]
})


router.beforeEach((to, from, next) => {
    console.log(to);
    if (!router.hasRoute(to.name)) {
        if (to.fullPath.includes('layout')) {
            return next({ name: 'NotFound' })
        }
        return next({ name: '404' })
    }
    if (to.meta.needLogin === false) {
        return next()
    }
    if (!localStorage.getItem('token') && to.name != 'Login') {
        return next({ name: 'Login' })
    }
    return next()
})

export default router
