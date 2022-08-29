/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-30 03:58:10
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 06:05:59
 * @FilePath     : \web-B-tmp\src\views\import\utils.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */

/**
 * 上传数据的对照表
 * */
export const USER_RELATIONS = {
    角色: 'role',
    姓名: 'username',
    开通时间: 'openTime',
    联系方式: 'mobile',
    头像: 'avatar'
}

/**
 * 解析 excel 导入的时间格式
 * */
export const formatDate = (val: any) => {
    const time = new Date((val - 1) * 24 * 3600000 + 1) as any
    console.log(time)
    time.setYear(time.getFullYear() - 70)!
    const year = time.getFullYear() + ''
    const month = time.getMonth() + 1 + ''
    const date = time.getDate() - 1 + ''
    return (
        year +
        '-' +
        (Number(month) < 10 ? '0' + month : month) +
        '-' +
        (Number(date) < 10 ? '0' + date : date)
    )
}
