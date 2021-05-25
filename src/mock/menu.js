export const person = [
    { path: '/layout/person/index', name: '人员管理', componet: () => import('@/views/person/pages/person.vue') },
    { path: '/layout/person/department', name: '部门管理', componet: () => import('@/views/person/pages/department.vue') },
]


export const settings = [
    { path: '/layout/settings/app', name: '应用管理', componet: () => import('@/views/settings/pages/app.vue') },
    { path: '/layout/settings/company', name: '公司管理', componet: () => import('@/views/settings/pages/company.vue') },
]