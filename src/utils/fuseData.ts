/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-26 21:00:04
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-26 21:43:04
 * @FilePath     : \web-B-tmp\src\utils\fuseData.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import i18n from '@/i18n'
/**
 * @description  : 筛选出可供搜索的路由对象
 * @param         {*} routes 路由表
 * @param         {*} basePath 基础路径
 * @param         {*} prefixTitle
 * @return        {*}
 */
export const generateRoutes = (routes: any, basePath = '/', prefixTitle = []) => {
    // 创建 result 数据
    let res: any = []
    for (const route of routes) {
        const data = {
            path: route.path, //basePath + route.path,
            title: <any>[...prefixTitle]
        }
        // 当前存在 meta 时, 使用 i18n 做国际化处理
        // 动态路由不允许被检索
        const re = /.*\/:.*/
        if (route.meta && route.meta.title && !re.exec(route.path)) {
            const i18nTitle = i18n.global.t(`route.${route.meta.title}`)
            data.title = [...data.title, i18nTitle]
            res.push(data)
        }
        // 存在 children 时, 迭代进行处理
        if (route.children) {
            const tmpRoutes = generateRoutes(route.children, data.path, data.title)
            if (tmpRoutes.length > 0) {
                res = [...res, ...tmpRoutes]
            }
        }
    }
    return res
}
