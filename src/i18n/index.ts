/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-22 07:03:08
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-24 00:57:56
 * @FilePath     : \web-B-tmp\src\i18n\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { createI18n } from 'vue-i18n'
import { getItem } from '@/utils/storage'
import { LANG } from '@/constants'
import en from './module/en'
import zh from './module/zh'

// 数据源
const messages = {
    en,
    zh
}

// 设置语言
const locale = getItem(LANG) || 'zh'

// 配置信息
const i18n = createI18n({
    // 使用 composition API
    legacy: false,
    // 全局使用 t 函数
    globalInjection: true,
    // 语言
    locale,
    // 数据源
    messages,
    // 阻止警告
    warnHtmlMessage: false
})

export default i18n
