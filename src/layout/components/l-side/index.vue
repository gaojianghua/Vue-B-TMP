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
    console.log(fRoutes)
    return generateMenus(fRoutes)
})
</script>

<style lang="scss" scoped></style>
