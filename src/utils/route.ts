/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-12 00:57:06
 * @FilePath     : \web-B-tmp\src\utils\route.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { isNull } from './conversion'
import { generateTitle } from './routeI18n'

/**
 * 所有子集路由
 */
const getChildrenRoutes = (routes: any[]) => {
    const result = <any[]>[]
    routes.forEach((route) => {
        if (route.children && route.children.length > 0) {
            result.push(...route.children)
        }
    })
    return result
}

/**
 * 处理脱离层级的路由
 */
export const filterRoutes = (routes: any) => {
    // 所有的子集路由
    const childrenRoutes = getChildrenRoutes(routes)
    // 根据子集路由进行查重操作
    return routes.filter((route: any) => {
        // 对比 route 与 childrenRoutes 进行查重, 把所有的重复路由剔除
        return !childrenRoutes.find((childrenRoutes) => {
            return childrenRoutes.path === route.path
        })
    })
}

/**
 * 根据 routes 数据, 返回对应的 menu 规则数据
 */
export const generateMenus = (routes: any) => {
    const result = <any>[]
    let num = 1
    let path = ''
    routes.forEach((item: any, i: number) => {
        // 不存在 children && 不存在 meta 直接 return
        if (isNull(item.children) && isNull(item.meta)) return
        // 存在 children, 不存在meta, 迭代 generateMenus
        if (isNull(item.meta) && !isNull(item.children)) {
            result.push(...generateMenus(item.children))
        }
        let route = {
            ...item,
            icon: item.meta.icon,
            name: item.meta.title ? generateTitle(item.meta.title) : item.meta.title,
            path: item.path,
            index: item.path,
            children: []
        }
        if (item.meta.icon && item.meta.title && item.path !== path) {
            result.push(route)
        }
        if (!isNull(item.children) && item.path === path) {
            num++
            result[i - num].children.push(...generateMenus(item.children))
        }
        // 存在 children && 存在 meta
        if (!isNull(item.children)) {
            route.children.push(...generateMenus(item.children))
        }
        path = item.path
    })

    return result
}
