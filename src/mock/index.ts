/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-13 04:29:35
 * @FilePath     : \web-B-tmp\src\mock\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import Mock from 'mockjs'
import system from './system'
import user from './user'
import userManage from './user-manage'
import article from './article'

// system
Mock.mock('/api/system/login', 'post', system.login)

// user
Mock.mock('/api/user/profile', 'get', user.getProfile)
Mock.mock('/api/user/feature', 'get', user.getFeature)
Mock.mock('/api/user/chapter', 'get', user.getChapter)

// staff
Mock.mock('/api/user-manage/list', 'post', userManage.getUserList)
Mock.mock('/api/user-manage/list/all', 'get', userManage.getAllUserList)
Mock.mock('/api/user-manage/import', 'post', userManage.userBatchImport)
Mock.mock('/api/user-manage/remove', 'post', userManage.removeUser)
Mock.mock('/api/user-manage/detail/:id', 'get', userManage.getUserDetail)
Mock.mock('/api/user-manage/role/list', 'get', userManage.getRoleList)
Mock.mock('/api/user-manage/permission/list', 'get', userManage.getPermissionList)
Mock.mock('/api/user-manage/role/:id', 'get', userManage.getUserRole)
Mock.mock('/api/user-manage/role/update', 'post', userManage.updateUserRole)
Mock.mock('/api/user-manage/role/permission/:id', 'get', userManage.getRoleInPermission)
Mock.mock('/api/user-manage/permission/update', 'post', userManage.updateRolePermission)
Mock.mock('/api/user-manage/update', 'post', userManage.updateUser)

// article
Mock.mock('/api/article/list', 'post', article.getArticleList)
Mock.mock('/api/article/sort', 'post', article.articleSort)
Mock.mock('/api/article/remove', 'post', article.removeArticle)
Mock.mock('/api/article/detail', 'post', article.getArticleDetail)
Mock.mock('/api/article/create', 'post', article.createArticle)
Mock.mock('/api/article/editor', 'post', article.editorArticle)
Mock.mock('/api/article/update', 'post', article.updateArticle)

export default Mock
