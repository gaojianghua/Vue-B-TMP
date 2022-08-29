/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-29 04:08:11
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 07:08:52
 * @FilePath     : \web-B-tmp\src\filters\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
interface AFilters {
    dateFilter: (val: string, format?: string) => string
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $filters: AFilters
    }
}
import { App } from 'vue'
import dayjs from 'dayjs'

const dateFilter = (val: string, format = 'YYYY-MM-DD') => {
    if (val.indexOf('-') > -1) {
        return val
    }
    return dayjs(Number(val)).format(format)
}

export default (app: App) => {
    app.config.globalProperties.$filters = {
        dateFilter
    }
}
