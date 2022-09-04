/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 03:46:29
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-04 11:27:08
 * @FilePath     : \web-B-tmp\src\router\modules\articleCreate.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import layout from '@/layout/index.vue'
export default {
    path: '/article',
    // component: () => import('@/layout/index.vue'),
    component: layout,
    redirect: '/article/ranking',
    name: 'articleCreate',
    meta: {
        title: 'article',
        icon: 'Tickets'
    },
    children: [
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
            meta: {
                title: 'articleEditor'
            },
            component: () => import('@/views/article-create/index.vue')
        }
    ]
}
