/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:51:44
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 01:51:47
 * @FilePath     : \web-B-tmp\src\api\staff\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import http from '@/utils/request'
import * as T from './types'

const staffApi: T.IStaffApi = {
    // 获取员工列表
    getStaffList(query) {
        return http.get('/staff/list', query)
    }
}
export default staffApi
