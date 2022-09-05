/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:51:54
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-05 08:56:18
 * @FilePath     : \web-B-tmp\src\api\article\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import http from '@/utils/request'
import * as T from './types'

const articleApi: T.IArticleApi = {
    // 获取文章列表
    getArticleList(query) {
        return http.post('/article/list', query)
    },
    // 修改排序
    articleSort(query) {
        return http.post('/article/sort', query)
    },
    // 删除某一项
    removeArticle(query) {
        return http.post('/article/remove', query)
    },
    // 获取文章详情
    getArticleDetail(query) {
        return http.get('/article/detail/:id', query)
    }
}
export default articleApi
