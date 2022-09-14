<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-14 22:55:27
 * @FilePath     : \web-B-tmp\src\views\home\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-card id="cardRef">
        <!-- 顶部标题 -->
        <div class="w-full flex items-center justify-center relative">
            <div class="card-title flex items-center justify-center text-[24px]">
                天论实时数据监测大屏
            </div>
            <div class="card-fullScreen flex items-center justify-center p-[10px]">
                <!-- 全屏切换 -->
                <screen-full :target="cardRef" class="w-[24px] h-[24px]"></screen-full>
            </div>
        </div>
        <!-- 内容区域 -->
        <div class="mt-[35px] h-full flex justify-between">
            <!-- 左 -->
            <div id="left" class="w-[25%] flex flex-col items-center">
                <user-chart-vue></user-chart-vue>
                <course-chart-vue class="mt-[22px]"></course-chart-vue>
            </div>
            <!-- 中 -->
            <div id="center" class="w-[50%] flex items-center justify-center">
                <map-chart-vue :value="Number(center)"></map-chart-vue>
            </div>
            <!-- 右 -->
            <div id="right" class="w-[25%] flex flex-col items-center">
                <type-chart-vue></type-chart-vue>
                <total-chart-vue class="mt-[22px]"></total-chart-vue>
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import userChartVue from './components/userChart.vue'
import typeChartVue from './components/typeChart.vue'
import totalChartVue from './components/totalChart.vue'
import courseChartVue from './components/courseChart.vue'
import mapChartVue from './components/mapChart.vue'

const cardRef = ref<Element>()
const left = ref<Number>()
const center = ref<Number>()
const right = ref<Number>()

onMounted(() => {
    left.value = document.querySelector('#left')!.clientWidth
    center.value = document.querySelector('#center')!.clientWidth
    right.value = document.querySelector('#right')!.clientWidth
    console.log(left.value, center.value, right.value)
    cardRef.value = document.querySelector('#cardRef')!
})
</script>

<style lang="scss" scoped>
.el-card {
    background-image: url('https://official-document.oss-cn-hangzhou.aliyuncs.com/141b53c86d1f6dc174982e6f122dcbfc.jpg');
    background-image: 100% 100%;
    .card-title {
        letter-spacing: 2px;
        border-radius: 5px 5px 50px 60px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(15px);
        box-shadow: 0 0 10px #f5f5f5;
        width: 65%;
        padding: 20px;
        font-weight: bold;
        text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0,
            0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.6);
    }
    .card-fullScreen {
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(15px);
        box-shadow: 0 0 10px #f5f5f5;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
