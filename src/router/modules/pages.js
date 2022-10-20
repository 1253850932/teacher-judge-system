// @ts-nocheck
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
    {
        path: '/pages',
        component: Layout,
        redirect: '/pages/crudTable',
        meta: { title: '首页', icon: 'el-icon-circle-plus ', roles: ['admin'] },
        alwayShow: true,
        children: [
            {
                path: 'crudTable',
                component: createNameComponent(() => import('@/views/main/pages/crudTable/index.vue')),
                meta: { title: '业务表格', cache: false, roles: ['admin', 'editor'] }
            },
            {
                path: 'categoryTable',
                component: createNameComponent(() => import('@/views/main/pages/categoryTable/index.vue')),
                meta: { title: '分类联动表格', cache: true, roles: ['admin'] }
            },
            {
                path: 'treeTable',
                component: createNameComponent(() => import('@/views/main/pages/treeTable/index.vue')),
                meta: { title: '树联动表格', cache: true }
            }
        ]
    },
    {
        path: '/course',
        component: Layout,
        redirect: '/course/check',
        meta: { title: '课程管理', icon: 'el-icon-house', roles: ['admin'] },
        alwayShow: true,
        children: [
            {
                path: 'check',
                component: createNameComponent(() => import('@/views/course/check/index.vue')),
                meta: { title: '课程信息查看', cache: false, roles: ['admin', 'editor'] }
            },
            {
                path: 'add',
                component: createNameComponent(() => import('@/views/course/add/index.vue')),
                meta: { title: '添加课程信息', cache: true, roles: ['admin'] }
            }
        ]
    },
    {
        path: '/teacher',
        component: Layout,
        redirect: '/teacher/revise',
        meta: { title: '教师管理', icon: 'el-icon-rank', roles: ['editor'] },
        alwayShow: true,
        children: [
            {
                path: 'revise',
                component: createNameComponent(() => import('@/views/teacher/revise/index.vue')),
                meta: { title: '修改教师信息', cache: true, roles: ['admin', 'editor'] }
            },
            {
                path: 'query',
                component: createNameComponent(() => import('@/views/teacher/query/index.vue')),
                meta: { title: '查询教师信息', cache: false, roles: ['admin', 'editor'] }
            }
        ]
    },
    {
        path: '/student',
        component: Layout,
        redirect: '/student/revise',
        meta: { title: '学生管理', icon: 'el-icon-document-copy', roles: ['editor'] },
        alwayShow: true,
        children: [
            {
                path: 'revise',
                component: createNameComponent(() => import('@/views/student/revise/index.vue')),
                meta: { title: '修改学生信息', cache: true, roles: ['admin', 'editor'] }
            },
            {
                path: 'query',
                component: createNameComponent(() => import('@/views/student/query/index.vue')),
                meta: { title: '查询学生信息', cache: false, roles: ['admin', 'editor'] }
            }
        ]
    },
    {
        path: '/quota',
        component: Layout,
        redirect: '/quota/check',
        meta: { title: '评教管理', icon: 'el-icon-document-copy', roles: ['editor'] },
        alwayShow: true,
        children: [
            {
                path: 'check',
                component: createNameComponent(() => import('@/views/quota/check/index.vue')),
                meta: { title: '评教信息查看', cache: true, roles: ['admin', 'editor'] }
            },
            {
                path: 'add',
                component: createNameComponent(() => import('@/views/quota/add/index.vue')),
                meta: { title: '添加评价任务', cache: false, roles: ['admin', 'editor'] }
            },
            {
                path: 'count',
                component: createNameComponent(() => import('@/views/quota/count/index.vue')),
                meta: { title: '老师评价统计', cache: false, roles: ['admin', 'editor'] }
            }
        ]
    }
]

export default route
