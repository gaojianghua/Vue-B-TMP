<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:19:17
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 01:40:42
 * @FilePath     : \web-B-tmp\src\components\panthumb\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="pan-item" :style="{ zIndex: zIndex, height: height, width: width }">
        <!-- 内层 -->
        <div class="pan-info">
            <div class="pan-info-roles">
                <slot />
            </div>
        </div>
        <!-- 外层 -->
        <div :style="{ backgroundImage: `url(${image})` }" class="pan-thumb"></div>
    </div>
</template>

<script setup lang="ts">
import { ZIndexProperty } from 'csstype'
import { ref } from 'vue'

defineProps({
    image: {
        type: String
    },
    zIndex: {
        type: Number,
        default: 1
    },
    width: {
        type: String,
        default: '150px'
    },
    height: {
        type: String,
        default: '150px'
    }
})
</script>

<style lang="scss" scoped>
.pan-item {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    position: relative;
    box-shadow: 0 1px 3px rgba($color: #000000, $alpha: 0.2);
    .pan-info {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset 0 0 0 5px rgba($color: #000000, $alpha: 0.05);
        .pan-info-roles {
            padding: 20px;
            text-align: center;
        }
    }
    .pan-thumb {
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: cover;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        transform-origin: 95% 40%;
        transition: all 0.3s ease-in-out;
    }
}
.pan-item:hover .pan-thumb {
    transform: rotate(-110deg);
}
.pan-item:hover .pan-info p a {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
}
</style>
