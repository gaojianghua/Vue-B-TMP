/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 03:28:21
 * @FilePath     : \web-B-tmp\src\utils\routeI18n.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import i18n from '@/i18n'
import useStore from '@/store'
import { watch } from 'vue'

// router 的语言切换
export const generateTitle = (title: string) => {
    return i18n.global.t('route.' + title)
}

/**
 * 监听语言变化, 执行cb
 *
 */
export const watchSwitchLang = (...cbs: any[]) => {
    watch(
        () => useStore().common.language,
        () => {
            cbs.forEach((cb) => cb(useStore().common.language))
        }
    )
}
