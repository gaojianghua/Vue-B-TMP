<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-27 03:57:07
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 13:09:27
 * @FilePath     : \web-B-tmp\src\layout\components\r-main\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="main">
        <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" mode="out-in">
                <keep-alive>
                    <component :is="Component" :key="route.path"></component>
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouteLocation, useRoute } from 'vue-router'
import { isTags } from '@/utils/tags'
import { generateTitle } from '@/utils/routeI18n'
import useStore from '@/store'

/**
 * 生成 title
 * */
const getTitle = (route: RouteLocation) => {
    let title: string = ''
    if (!route.meta) {
        const paths = route.path.split('/')
        title = paths[paths.length - 1]
    } else {
        title = generateTitle(String(route.meta.title))
    }
    return title
}

const route = useRoute()
watch(
    route,
    (to, from) => {
        if (!isTags(to.path)) return
        const { fullPath, meta, name, params, path, query } = to
        useStore().common.addTagsViewList({
            fullPath,
            meta,
            name,
            params,
            path,
            query,
            title: getTitle(to)
        })
    },
    { immediate: true }
)
</script>

<style lang="scss" scoped>
.main {
}
</style>
