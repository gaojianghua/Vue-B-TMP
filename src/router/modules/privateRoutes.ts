/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-31 02:45:11
 * @FilePath     : \web-B-tmp\src\router\modules\privateRoutes.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import Layout from '@/layout/index.vue'

export default [
    {
        path: '/user',
        component: Layout,
        redirect: '/user/manage',
        meta: {
            title: 'user',
            icon: 'Avatar'
        },
        children: [
            {
                path: '/user/manage',
                name: 'userManage',
                meta: {
                    title: 'userManage',
                    icon: 'Management'
                },
                component: () => import('@/views/user-manage/index.vue')
            },
            {
                path: '/user/role',
                name: 'userRole',
                meta: {
                    title: 'roleList',
                    icon: 'List'
                },
                component: () => import('@/views/role-list/index.vue')
            },
            {
                path: '/user/permission',
                name: 'userPermission',
                meta: {
                    title: 'permissionList',
                    icon: 'Key'
                },
                component: () => import('@/views/permission-list/index.vue')
            },
            {
                path: '/user/info/:id',
                name: 'userInfo',
                props: true,
                meta: {
                    title: 'userInfo'
                },
                component: () => import('@/views/user-info/index.vue')
            },
            {
                path: '/user/import',
                name: 'import',
                meta: {
                    title: 'excelImport'
                },
                component: () => import('@/views/import/index.vue')
            }
        ]
    },
    {
        path: '/article',
        component: Layout,
        redirect: '/article/ranking',
        meta: {
            title: 'article',
            icon: 'Tickets'
        },
        children: [
            {
                path: '/article/ranking',
                name: 'articleRanking',
                meta: {
                    title: 'articleRanking',
                    icon: 'GoldMedal'
                },
                component: () => import('@/views/article-ranking/index.vue')
            },
            {
                path: '/article/:id',
                name: 'articleDetail',

                component: () => import('@/views/article-detail/index.vue')
            },
            {
                path: '/article/create',
                name: 'articleCreate',
                meta: {
                    title: 'articleCreate',
                    icon: 'DocumentAdd'
                },
                component: () => import('@/views/article-create/index.vue')
            },
            {
                path: '/article/editor/:id',
                name: 'articleEditor',
                component: () => import('@/views/article-create/index.vue')
            }
        ]
    }
]
