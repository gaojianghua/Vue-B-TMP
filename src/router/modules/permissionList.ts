/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 03:46:06
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-04 11:29:47
 * @FilePath     : \web-B-tmp\src\router\modules\permissionList.ts
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
    name: 'permissionList',
    meta: {
        title: 'user',
        icon: 'Avatar'
    },
    children: [
        {
            path: '/user/permission',
            name: 'userPermission',
            meta: {
                title: 'permissionList',
                icon: 'Key'
            },
            component: () => import('@/views/permission-list/index.vue')
        }
    ]
}
