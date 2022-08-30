/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 08:20:23
 * @FilePath     : \web-B-tmp\src\api\user-manage\index.ts
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
    },
    // 删除员工
    removeUser(query) {
        return http.post('/user-manage/remove', query)
    }
}
export default userManageApi
