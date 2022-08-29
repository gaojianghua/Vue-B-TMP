/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 04:23:54
 * @FilePath     : \web-B-tmp\src\mock\user.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { profile, feature, chapter } from './data'

export default {
    getProfile: () => {
        return {
            code: 200,
            data: profile,
            msg: '登录成功'
        }
    },
    getFeature: () => {
        return {
            code: 200,
            data: feature,
            msg: '登录成功'
        }
    },
    getChapter: () => {
        return {
            code: 200,
            data: chapter,
            msg: '登录成功'
        }
    }
}
