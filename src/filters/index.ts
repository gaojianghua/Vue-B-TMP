/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-29 04:08:11
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-03 05:21:31
 * @FilePath     : \web-B-tmp\src\filters\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
interface AFilters {
    dateFilter: (val: string, format?: string) => string
    relativeTime: (val: string, format?: string) => string
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $filters: AFilters
    }
}
import { App } from 'vue'
import dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import useStore from '@/store'

export const dateFilter = (val: string, format = 'YYYY-MM-DD') => {
    if (String(val).indexOf('-') > -1) {
        return val
    }
    return dayjs(Number(val)).format(format)
}

dayjs.extend(rt)
const relativeTime = (val: any) => {
    return dayjs()
        .locale(useStore().common.language === 'zh' ? 'zh-cn' : 'en')
        .to(dayjs(Number(val)))
}

export default (app: App) => {
    app.config.globalProperties.$filters = {
        dateFilter,
        relativeTime
    }
}
