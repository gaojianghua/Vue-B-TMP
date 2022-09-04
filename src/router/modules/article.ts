/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 03:46:18
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-03 14:07:48
 * @FilePath     : \web-B-tmp\src\router\modules\article.ts
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
    name: 'articleRanking',
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
            meta: {
                title: 'articleDetail'
            },
            component: () => import('@/views/article-detail/index.vue')
        }
    ]
}
