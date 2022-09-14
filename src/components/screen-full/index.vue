<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-26 05:27:26
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-13 06:13:55
 * @FilePath     : \web-B-tmp\src\components\screen-full\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="cursor-pointer" @click="onToggle">
        <g-svg-icon
            id="guide-full"
            :name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
        ></g-svg-icon>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import screenfull from 'screenfull'

const props = defineProps({
    target: {
        type: Element
    }
})

// 是否全屏
const isFullscreen = ref<boolean>(false)

// 点击全屏放大缩小
const onToggle = () => {
    if (props.target) {
        screenfull.toggle(props.target)
    } else {
        screenfull.toggle()
    }
}

// 监听 screenfull
const change = () => {
    isFullscreen.value = screenfull.isFullscreen
}
// on: 绑定监听
onMounted(() => {
    screenfull.on('change', change)
})
// off: 取消监听
onUnmounted(() => {
    screenfull.on('change', change)
})
</script>

<style lang="scss" scoped></style>
