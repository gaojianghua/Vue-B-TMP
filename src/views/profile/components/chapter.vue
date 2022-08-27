<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:07:23
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 04:32:03
 * @FilePath     : \web-B-tmp\src\views\profile\components\chapter.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-timeline>
        <el-timeline-item
            v-for="item in chapterData"
            :key="item.id"
            :timestamp="item.timestamp"
            placement="top"
        >
            <!-- content -->
            <el-card>
                <h4 class="font-bold">{{ item.content }}</h4>
                <!-- card body -->
            </el-card>
        </el-timeline-item>
    </el-timeline>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userApi } from '@/api'
import { watchSwitchLang } from '@/utils/routeI18n'

/**
 * 获取数据
 * */
const chapterData = ref<any[]>([])
const getChapterData = async () => {
    chapterData.value = await userApi.getChapter()
}
getChapterData()
watchSwitchLang(getChapterData)
</script>

<style lang="scss" scoped></style>
