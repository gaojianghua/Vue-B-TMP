/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 03:45:35
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-04 11:28:58
 * @FilePath     : \web-B-tmp\src\router\modules\userManage.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 03:45:35
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-02 03:45:35
 * @FilePath     : \web-B-tmp\src\router\permissions\userManage.ts
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
    name: 'userManage',
    meta: {
        title: 'user',
        icon: 'Avatar'
    },
    children: [
        {
            path: '/user/manage',
            meta: {
                title: 'userManage',
                icon: 'Management'
            },
            component: () => import('@/views/user-manage/index.vue')
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
}
