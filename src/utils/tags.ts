/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-27 05:35:42
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 05:37:56
 * @FilePath     : \web-B-tmp\src\utils\tags.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */

/**
 * 不被保存的路由
 * */
const whiteList = ['/login', '/404', '/401']
/**
 * 期望被保存的路由
 */
export const isTags = (path: string) => {
    return !whiteList.includes(path)
}
