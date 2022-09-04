/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 03:45:52
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-04 11:28:21
 * @FilePath     : \web-B-tmp\src\router\modules\roleList.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import layout from '@/layout/index.vue'
export default {
    path: '/user',
    // component: () => import('@/layout/index.vue'),
    component: layout,
    redirect: '/user/manage',
    name: 'roleList',
    meta: {
        title: 'user',
        icon: 'Avatar'
    },
    children: [
        {
            path: '/user/role',
            name: 'userRole',
            meta: {
                title: 'roleList',
                icon: 'List'
            },
            component: () => import('@/views/role-list/index.vue')
        }
    ]
}
