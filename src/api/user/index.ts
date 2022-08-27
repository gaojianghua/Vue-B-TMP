/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 04:22:42
 * @FilePath     : \web-B-tmp\src\api\user\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import http from '@/utils/request'
import * as T from './types'

const userApi: T.IUserApi = {
    // 获取用户信息
    getProfile() {
        return http.get('/user/profile')
    },
    // 修改用户信息
    putProfile(query) {
        return http.put('/user/profile', query)
    },
    // 获取项目功能
    getFeature() {
        return http.get('/user/feature')
    },
    // 获取项目章节
    getChapter() {
        return http.get('/user/chapter')
    }
}
export default userApi
