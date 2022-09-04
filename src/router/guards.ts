/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-04 11:15:29
 * @FilePath     : \web-B-tmp\src\router\guards.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import router from './index'
import useStore from '@/store'
import { isNull } from '@/utils/conversion'
// 白名单
const whiteList = ['/login']

/**
 * @description  : 路由前置守卫
 * @param         {*} to 目标地址
 * @param         {*} from 当前地址
 * @param         {*} next 是否跳转
 * @return        {*} 无
 */
router.beforeEach(async (to, from, next) => {
    // 已登录
    if (useStore().user.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            // 判断用户信息是否存在
            if (!useStore().user.hasUserInfo) {
                console.log('11')
                const { permission } = await useStore().user.getProfile()
                // 处理用户权限
                const filterRoutes = await useStore().permission.filterRoutes(permission.menus)
                // 循环添加动态路由
                filterRoutes.forEach((item: any, i: number) => {
                    router.addRoute(item)
                })
                // 添加完成路由后, 需要进行一次主动跳转
                return next(to.path)
            }
            next()
        }
    } else {
        // 未登录
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next('/login')
        }
    }
})
