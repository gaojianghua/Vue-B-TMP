<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-29 06:38:21
 * @FilePath     : \web-B-tmp\src\layout\components\l-side\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div
        id="guide-sidebar"
        class="h-screen"
        :style="{ backgroundColor: useStore().common.globalCss.menuBg }"
    >
        <div class="flex items-center justify-center py-5">
            <img v-if="collapse" class="w-[50px]" src="@/assets/images/logoImg.png" alt="" />
            <img v-else class="w-[120px] duration-300" src="@/assets/images/logo.png" alt="" />
        </div>
        <g-menu
            :active-text-color="useStore().common.globalCss.menuActiveText"
            :text-color="useStore().common.globalCss.menuText"
            :background-color="useStore().common.globalCss.menuBg"
            :collapse="collapse"
            :data="data"
            router
            :defaultActive="$route.path"
        ></g-menu>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { generateMenus, filterRoutes } from '@/utils/route'
import router from '@/router'
import useStore from '@/store'

defineProps({
    collapse: Boolean
})
const data = computed(() => {
    const fRoutes = filterRoutes(router.getRoutes())
    return generateMenus(fRoutes)
})
</script>

<style lang="scss" scoped></style>
