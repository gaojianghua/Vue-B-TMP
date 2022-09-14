/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-13 04:09:35
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
    // 获取所有员工列表
    getAllUserList() {
        return http.get('/user-manage/list/all')
    },
    // 批量上传
    userBatchImport(query) {
        return http.post('/user-manage/import', query)
    },
    // 删除员工
    removeUser(query) {
        return http.post('/user-manage/remove', query)
    },
    // 获取员工详情信息
    getUserDetail(query) {
        return http.get('/user-manage/detail/:id', query)
    },
    // 获取角色列表
    getRoleList() {
        return http.get('/user-manage/role/list')
    },
    // 获取权限列表
    getPermissionList() {
        return http.get('/user-manage/permission/list')
    },
    // 获取用户当前角色
    getUserRole(query) {
        return http.get('/user-manage/role/:id', query)
    },
    // 为用户分配角色
    updateUserRole(query) {
        return http.post('/user-manage/role/update', query)
    },
    // 获取当前角色对应权限
    getRoleInPermission(query) {
        return http.get('/user-manage/role/permission/:id', query)
    },
    // 为用户分配角色
    updateRolePermission(query) {
        return http.post('/user-manage/permission/update', query)
    },
    // 修改用户单一属性
    updateUser(query) {
        return http.post('/user-manage/update', query)
    }
}
export default userManageApi
