/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-06 10:14:35
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-06 10:16:41
 * @FilePath     : \web-B-tmp\src\utils\filterHtml.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
// 只提取汉字
export const GetChinese = (str: string) => {
    if (str !== null && str !== '') {
        const reg = /[\u4e00-\u9fa5]/g
        return str.match(reg)!.join('')
    } else return ''
}

// 去掉html文字
export const Removehtml = (str: string) => {
    if (str !== null && str !== '') {
        var reg = /<[^>]+>/g
        return str.replace(/<[^>]+>/g, ' ')
    } else return ''
}

// 去掉汉字
export const RemoveChinese = (str: string) => {
    if (str !== null && str !== '') {
        var reg = /[\u4e00-\u9fa5]/g
        return str.replace(reg, '')
    } else return ''
}
