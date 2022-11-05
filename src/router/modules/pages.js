// @ts-nocheck
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
    {
        path: '/user',
        component: Layout,
        redirect: '/user/userManage',
        meta: { title: '用户管理', icon: 'el-icon-user ', roles: [2, 1] },
        alwayShow: false,
        // children: [
        //     {
        //         path: 'crudTable',
        //         component: createNameComponent(() => import('@/views/main/pages/crudTable/index.vue')),
        //         meta: { title: '学生管理', cache: false, roles: [2, 1] }
        //     },
        //     {
        //         path: 'categoryTable',
        //         component: createNameComponent(() => import('@/views/main/pages/categoryTable/index.vue')),
        //         meta: { title: '教师管理', cache: true, roles: [2, 1] }
        //     },
        //     {
        //         path: 'treeTable',
        //         component: createNameComponent(() => import('@/views/main/pages/treeTable/index.vue')),
        //         meta: { title: '评价结果', cache: true, roles: [2, 1] }
        //     }
        // ]
        children: [
            {
                path: 'userManage',
                component: createNameComponent(() => import('@/views/userManage/index.vue')),
                meta: { title: '用户管理', cache: false, roles: [2, 1], hideClose: true }
            }
        ]
    },
    {
        path: '/judge',
        component: Layout,
        redirect: '/judge/teacher',
        meta: { title: '评教管理', icon: 'el-icon-connection', roles: [2] },
        alwayShow: false,
        children: [
            {
                path: 'student',
                component: createNameComponent(() => import('@/views/judgeManage/student/index.vue')),
                meta: { title: '学生评教内容管理', cache: true, roles: [2] }
            },
            {
                path: 'teacher',
                component: createNameComponent(() => import('@/views/judgeManage/teacher/index.vue')),
                meta: { title: '老师评教内容管理', cache: false, roles: [2] }
            }
        ]
    },

    {
        path: '/count',
        component: Layout,
        redirect: '/count/student',
        meta: { title: '计分管理', icon: 'el-icon-finished', roles: [2, 1] },
        alwayShow: false,
        children: [
            {
                path: 'student',
                component: createNameComponent(() => import('@/views/countManage/student/index.vue')),
                meta: { title: '学生评教', cache: true, roles: [2, 1] }
            },
            {
                path: 'teacher',
                component: createNameComponent(() => import('@/views/countManage/teacher/index.vue')),
                meta: { title: '教师评教', cache: false, roles: [2, 1] }
            }
        ]
    },
    {
        path: '/system',
        component: Layout,
        redirect: '/system/course',
        meta: { title: '系统设置', icon: 'el-icon-setting', roles: [2] },
        alwayShow: false,
        children: [
            {
                path: 'course',
                component: createNameComponent(() => import('@/views/systemManage/course/index.vue')),
                meta: { title: '课程设置', cache: true, roles: [2] }
            },
            {
                path: 'college',
                component: createNameComponent(() => import('@/views/systemManage/college/index.vue')),
                meta: { title: '院系设置', cache: true, roles: [2] }
            }
        ]
    }
]

export default route
