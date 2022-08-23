import Home from '@/views/home/index.vue'
import Layout from '@/layout/index.vue'

export default [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            // 首页
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: 'home',
                    icon: 'HomeFilled'
                }
            },
            // 个人中心
            {
                path: '/profile',
                name: 'profile',
                meta: {
                    title: 'profile',
                    icon: 'UserFilled'
                },
                component: () => import('@/views/profile/index.vue')
            },
            // 404
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/error-page/404.vue')
            },
            // 401
            {
                path: '/401',
                name: '401',
                component: () => import('@/views/error-page/401.vue')
            }
        ]
    }
]
