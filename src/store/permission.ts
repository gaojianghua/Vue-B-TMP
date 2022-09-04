/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-01 14:25:35
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-03 14:16:09
 * @FilePath     : \web-B-tmp\src\store\permission.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { privateRoutes, publicRoutes } from '@/router'

const usePermissionStore = defineStore('permission', {
    state: () => {
        return {
            // 初始路由表
            routes: publicRoutes
        }
    },
    actions: {
        setRoutes(newRoutes: any) {
            this.routes = [...publicRoutes, ...newRoutes]
        },
        /**
         * @description  : 根据权限数据筛选路由
         * @param         {any} menus 权限数据
         * @return        {*}
         */
        filterRoutes(menus: any): any {
            let routes: any = []
            menus.forEach((key: string) => {
                routes.push(...privateRoutes.filter((item: any) => item.name === key))
            })
            /**
             * 所有不匹配路由进入 404 页面
             * 该页面路由必须在所有路由指定后添加
             * */
            routes.push({
                path: '/:catchAll(.*)',
                redirect: '/404'
            })
            this.setRoutes(routes)
            return routes
        }
    }
})

export default usePermissionStore
