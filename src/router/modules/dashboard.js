// @ts-nocheck
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        meta: { title: ' ', icon: 'el-icon-menu' },
        children: [
            {
                path: 'dashboard',
                component: createNameComponent(() => import('@/views/main/dashboard/index.vue')),
                meta: { title: '首页', icon: 'el-icon-house', hideClose: true }
            }
        ]
    }
]

export default route
