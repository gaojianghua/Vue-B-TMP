/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 14:19:06
 * @FilePath     : \web-B-tmp\src\api\user-manage\types.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
export interface IUserManageApi {
    getUserList: (query: any) => Promise<any>
    getAllUserList: () => Promise<any>
    userBatchImport: (query: any) => Promise<any>
    removeUser: (query: any) => Promise<any>
    getUserDetail: (query: any) => Promise<any>
    getRoleList: () => Promise<any>
    getPermissionList: () => Promise<any>
    getUserRole: (query: any) => Promise<any>
    updateUserRole: (query: any) => Promise<any>
    getRoleInPermission: (query: any) => Promise<any>
    updateRolePermission: (query: any) => Promise<any>
    updateUser: (query: any) => Promise<any>
}
