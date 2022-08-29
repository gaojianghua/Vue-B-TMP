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

const userManageApi: T.IUserManageApi = {
    // 获取员工列表
    getUserList(query) {
        return http.post('/user-manage/list', query)
    },
    // 批量上传
    userBatchImport(query) {
        return http.post('/user-manage/import', query)
    }
}
export default userManageApi
