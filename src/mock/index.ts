/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 01:57:32
 * @FilePath     : \web-B-tmp\src\mock\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import Mock from 'mockjs'
import system from './system'
import user from './user'

// system
Mock.mock('/api/system/login', 'post', system.login)

// user
Mock.mock('/api/user/profile', 'get', user.getProfile)
Mock.mock('/api/user/feature', 'get', user.getFeature)
Mock.mock('/api/user/chapter', 'get', user.getChapter)

export default Mock
