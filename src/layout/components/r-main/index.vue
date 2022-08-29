<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-27 03:57:07
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-29 05:55:42
 * @FilePath     : \web-B-tmp\src\layout\components\r-main\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div>
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
import { watch } from 'vue'
import { RouteLocation, useRoute } from 'vue-router'
import { isTags } from '@/utils/tags'
import { generateTitle, watchSwitchLang } from '@/utils/routeI18n'
import useStore from '@/store'

/**
 * 生成 title
 * */
const getTitle = (route: RouteLocation) => {
    // let title: string = ''
    // if (route.meta.title !== route.name) {
    //     const paths = route.path.split('/')
    //     title = generateTitle(String(paths[paths.length - 1]))
    // } else {
    //     title = generateTitle(String(route.meta.title))
    // }
    return generateTitle(String(route.meta.title))
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
watchSwitchLang(() => {
    useStore().common.tagsViewList.forEach((route, index) => {
        useStore().common.changeTagsView({
            index,
            tag: {
                ...route,
                title: getTitle(route)
            }
        })
    })
})
</script>

<style lang="scss" scoped></style>
