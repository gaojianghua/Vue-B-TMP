/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 01:56:25
 * @FilePath     : \web-B-tmp\src\api\user\types.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
export interface IUserManageApi {
    getUserList: (query: any) => Promise<any>
    userBatchImport: (query: any) => Promise<any>
}
