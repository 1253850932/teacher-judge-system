// @ts-nocheck
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        meta: { title: ' ', icon: 'el-icon-menu', roles: ['teacher', 'system', 'student'] },
        children: [
            {
                path: 'dashboard',
                component: createNameComponent(() => import('@/views/main/dashboard/index.vue')),
                meta: { title: '首页', icon: 'el-icon-house', hideClose: true, roles: ['teacher', 'system', 'student'] }
            }
        ]
    }
]

export default route
