/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-07-18 17:48:53
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-01 14:26:59
 * @FilePath     : \web-B-tmp\src\store\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import useUserStore from './user'
import useCommonStore from './common'
import usePermissionStore from './permission'

// 统一导出 useStore 方法
export default function useStore() {
    return {
        user: useUserStore(),
        common: useCommonStore(),
        permission: usePermissionStore()
    }
}
