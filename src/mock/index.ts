/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 08:20:17
 * @FilePath     : \web-B-tmp\src\mock\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import Mock from 'mockjs'
import system from './system'
import user from './user'
import userManage from './user-manage'

// system
Mock.mock('/api/system/login', 'post', system.login)

// user
Mock.mock('/api/user/profile', 'get', user.getProfile)
Mock.mock('/api/user/feature', 'get', user.getFeature)
Mock.mock('/api/user/chapter', 'get', user.getChapter)

// staff
Mock.mock('/api/user-manage/list', 'post', userManage.getUserList)
Mock.mock('/api/user-manage/import', 'post', userManage.userBatchImport)
Mock.mock('/api/user-manage/remove', 'post', userManage.removeUser)

// article

export default Mock
