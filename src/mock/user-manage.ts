/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 07:05:05
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 08:20:45
 * @FilePath     : \web-B-tmp\src\mock\user-manage.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
let staffList = [
    {
        role: [
            {
                id: 1,
                title: '超级管理员'
            }
        ],
        id: 0,
        username: 'super-admin',
        openTime: '1661718913895',
        mobile: '188xxxx0002',
        avatar: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/logo-black.png'
    },
    {
        role: [
            {
                id: 2,
                title: '管理员'
            }
        ],
        id: 1,
        username: 'admin',
        openTime: '1661718913895',
        mobile: '188xxxx0002',
        avatar: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/logo-black.png'
    }
]

let oldId = -1

export default {
    getUserList: (params: any) => {
        let info = JSON.parse(params.body)
        let [index, size, total] = [info.current, info.pageSize, staffList.length]
        index = index - 1
        let len = total / size
        let totalPages = len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len
        let newDataList = staffList.slice(index * size, (index + 1) * size)
        return {
            code: 200,
            message: '获取成功',
            data: {
                current: index,
                pageSize: size,
                rows: newDataList,
                total: total,
                totalPages: totalPages
            }
        }
    },
    userBatchImport: (params: any) => {
        let info = JSON.parse(params.body)
        info.forEach((item: any) => {
            let arr = []
            let arrItem = {
                id: oldId++,
                title: item.role
            }
            arr.push(arrItem)
            let obj = {
                ...item,
                role: arr,
                id: oldId + 2
            }
            staffList.push(obj)
        })
        return {
            code: 200,
            data: '',
            msg: '上传成功'
        }
    },
    removeUser: (params: any) => {
        let { id } = JSON.parse(params.body)
        staffList.forEach((item, i) => {
            if (item.id === id) {
                staffList.splice(i, 1)
            }
        })
        return {
            code: 200,
            data: '',
            msg: '删除成功'
        }
    }
}
