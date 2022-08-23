<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-24 04:49:29
 * @FilePath     : \web-B-tmp\src\layout\components\r-header\breadcrumb.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-breadcrumb class="ml-3" :separator-icon="ArrowRight" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, i) in breadcrumb" :key="item.path">
                <!-- 不可点击 (最后一项) -->
                <span class="text-zinc-500 cursor-text" v-if="i === breadcrumb.length - 1">{{
                    generateTitle(String(item.meta.title))
                }}</span>
                <!-- 可点击 -->
                <span
                    class="text-zinc-900 font-bold cursor-pointer"
                    :class="[`hover:text-[${linkHoverColor}]`]"
                    v-else
                    @click="onClickLink(item.path)"
                    >{{ generateTitle(String(item.meta.title)) }}</span
                >
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { generateTitle } from '@/utils/routeI18n'

const route = useRoute()
const router = useRouter()
// 生成数组数据
const breadcrumb = ref<RouteLocationMatched[]>([])
const getBreadcrumbData = () => {
    breadcrumb.value = route.matched.filter((item) => item.meta && item.meta.title)
}
// 点击面包屑跳转
const onClickLink = (path: string) => {
    router.push(path)
}

// 监听路由变化
watch(
    route,
    () => {
        getBreadcrumbData()
    },
    { immediate: true }
)

// hover 颜色, 主题替换
const linkHoverColor = ref()
</script>

<style lang="scss" scoped></style>
