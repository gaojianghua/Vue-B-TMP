<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-30 08:45:27
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-31 01:25:00
 * @FilePath     : \web-B-tmp\src\views\user-manage\components\export-to-excel.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-dialog :title="$t('excel.title')" :model-value="modelValue" width="30%" @close="onClose">
        <el-input v-model="excelName" :placeholder="$t('excel.placeholder')"></el-input>
        <template #footer>
            <el-button @click="onClose">{{ $t('excel.close') }}</el-button>
            <el-button type="primary" @click="onConfirm" :loading="loading">{{
                $t('excel.confirm')
            }}</el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { watchSwitchLang } from '@/utils/routeI18n'
import { useI18n } from 'vue-i18n'
import { userManageApi } from '@/api'
import { USER_RELATIONS } from './exportToExcelConstarts'
import { dateFilter } from '@/filters'

defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
})
const emits = defineEmits(['update:modelValue'])

const loading = ref<boolean>(false)
// 默认导出文件名设置
const i18n = useI18n()
let exportDefaultName = i18n.t('excel.defaultName')
const excelName = ref<string>('')
excelName.value = exportDefaultName
watchSwitchLang(() => {
    exportDefaultName = i18n.t('excel.defaultName')
    excelName.value = exportDefaultName
})

// 取消事件
const onClose = () => {
    emits('update:modelValue', false)
}
// 确认事件
const onConfirm = async () => {
    loading.value = true
    // 获取数据
    const allUser = await userManageApi.getAllUserList()
    // 导入工具包
    const excel = await import('@/utils/Export2Excel')
    // 数据转换处理
    const data = formatJson(USER_RELATIONS, allUser)
    // 导出
    excel.export_json_to_excel({
        // excel 表头
        header: Object.keys(USER_RELATIONS),
        // excel 数据
        data,
        // 文件名称
        filename: excelName.value || exportDefaultName
    })
    onClose()
    loading.value = false
}
// JSON转换
const formatJson = (headers: any, rows: any[][]) => {
    return rows.map((item) => {
        return Object.keys(headers).map((key) => {
            // 角色进行单独处理
            if (headers[key] === 'role') {
                const roles = item[headers[key]]
                return JSON.stringify(roles.map((role: any) => role.title))
            }
            // 时间格式处理
            if (headers[key] === 'openTime') {
                return dateFilter(item[headers[key]])
            }
            return item[headers[key]]
        })
    })
}
</script>

<style lang="scss" scoped></style>
