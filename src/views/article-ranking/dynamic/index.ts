/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-04 12:29:52
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-04 12:48:58
 * @FilePath     : \web-B-tmp\src\views\article-ranking\dynamic\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import dynamicData from './data'
import { ref, watch } from 'vue'
import { watchSwitchLang } from '@/utils/routeI18n'

export const data = ref<any[]>(dynamicData())
watchSwitchLang(() => {
    data.value = dynamicData()
    initSelectDynamicLable()
})

export const selectDynamicLable = ref<string[]>([])

const initSelectDynamicLable = () => {
    selectDynamicLable.value = data.value.map((item) => item.label)
}
initSelectDynamicLable()

export const tableColumns = ref<any[]>([])
watch(
    selectDynamicLable,
    (val) => {
        tableColumns.value = []
        const selectData: any[] = data.value.filter((item) => {
            return val.includes(item.label)
        })
        tableColumns.value.push(...selectData)
    },
    { immediate: true }
)
