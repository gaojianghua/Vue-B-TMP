<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 05:56:27
 * @FilePath     : \web-B-tmp\src\views\import\index.vue
 * @Description  :
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div>
        <upload-excel :onSuccess="onSuccess"></upload-excel>
    </div>
</template>

<script setup lang="ts">
import { userManageApi } from '@/api'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { USER_RELATIONS, formatDate } from './utils'
import { useRouter } from 'vue-router'

const i18n = useI18n()
const router = useRouter()
// 上传成功的回调
const onSuccess = async ({ results }: any) => {
    const updateData = await generateData(results)
    console.log(updateData)
    await userManageApi.userBatchImport(updateData)
    ElMessage.success(results.length + i18n.t('excel.importSuccess'))
    router.push('/user/manage')
}
/**
 * 筛选数据
 */
const generateData = (results: any[]) => {
    const arr: any[] = []
    results.forEach((item: any) => {
        const userInfo = {}
        Object.keys(item).forEach((key) => {
            if (USER_RELATIONS[key as keyof typeof USER_RELATIONS] === 'openTime') {
                userInfo[
                    USER_RELATIONS[key as keyof typeof USER_RELATIONS] as keyof typeof userInfo
                ] = formatDate(item[key]) as never
            } else {
                userInfo[
                    USER_RELATIONS[key as keyof typeof USER_RELATIONS] as keyof typeof userInfo
                ] = item[key] as never
            }
        })
        arr.push(userInfo)
    })
    return arr
}
</script>

<style lang="scss" scoped></style>
