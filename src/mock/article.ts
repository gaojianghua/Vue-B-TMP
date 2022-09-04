/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 16:32:21
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-02 17:40:47
 * @FilePath     : \web-B-tmp\src\mock\article.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */

let articleList = [
    {
        id: 1,
        ranking: 1,
        title: 'ESlint + Git Hooks',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '编码规范'
    },
    {
        id: 2,
        ranking: 2,
        title: 'Tags View',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '便签快捷导航功能'
    },
    {
        id: 3,
        ranking: 3,
        title: 'Element Plus',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '基于 Vue 3.0 的桌面端组件库'
    },
    {
        id: 4,
        ranking: 4,
        title: '侧边栏',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '根据路由动态生成的 menu 菜单'
    },
    {
        id: 5,
        ranking: 5,
        title: '动态面包屑',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '动态生成的面包屑数据'
    },
    {
        id: 6,
        ranking: 6,
        title: '权限验证',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '页面权限, 功能权限, 动态权限, 权限配置'
    },
    {
        id: 7,
        ranking: 7,
        title: 'Web-B-Tmp',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '后台前端解决方案'
    },
    {
        id: 8,
        ranking: 8,
        title: 'Vue3 + 全家桶',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '项目基于最新的vue3全家桶进行开发'
    },
    {
        id: 9,
        ranking: 9,
        title: '功能引导',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '对用户的功能引导'
    },
    {
        id: 10,
        ranking: 10,
        title: '架构设计',
        author: '灰太狼',
        publicDate: '1661718913895',
        desc: '架构设计'
    }
]

export default {
    getArticleList: (params: any) => {
        let info = JSON.parse(params.body)
        let [index, size, total] = [info.current, info.pageSize, articleList.length]
        index = index - 1
        let len = total / size
        let totalPages = len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len
        let newDataList = articleList.slice(index * size, (index + 1) * size)
        return {
            code: 200,
            msg: '获取成功',
            data: {
                current: index,
                pageSize: size,
                rows: newDataList,
                total: total,
                totalPages: totalPages
            }
        }
    }
}
