<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-14 21:23:27
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-14 22:55:13
 * @FilePath     : \web-B-tmp\src\views\home\components\mapChart.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-14 18:59:13
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-14 21:16:34
 * @FilePath     : \web-B-tmp\src\views\home\components\totalChart.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="content flex items-center justify-center flex-col relative">
        <canvas
            ref="CanvasDom"
            id="gaojianghua"
            :width="cWidth"
            :height="cHeight"
            class="charts"
            @click="tap"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import uCharts from '@qiun/ucharts'
import china from './china.json'

const props = defineProps({
    value: {
        type: Number,
        requried: true
    }
})

let uChartsInstance: any = {}
const CanvasDom = ref()
const cWidth = ref(560)
const cHeight = ref(560)

onMounted(() => {
    getServerData()
})

function getServerData() {
    //模拟从服务器获取数据时的延时
    setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
            series: china.features
        }
        drawCharts('gaojianghua', res)
    }, 500)
}

function drawCharts(id: any, data: any) {
    const ctx = CanvasDom.value.getContext('2d')
    uChartsInstance[id as keyof typeof uChartsInstance] = new uCharts({
        type: 'map',
        context: ctx,
        width: cWidth.value,
        height: cHeight.value,
        series: data.series,
        animation: true,
        timing: 'easeOut',
        duration: 1000,
        rotate: false,
        rotateLock: false,
        background: '#FFFFFF',
        color: [
            '#1890FF',
            '#91CB74',
            '#FAC858',
            '#EE6666',
            '#73C0DE',
            '#3CA272',
            '#FC8452',
            '#9A60B4',
            '#ea7ccc'
        ],
        padding: [0, 0, 0, 0],
        fontSize: 13,
        fontColor: '#666666',
        dataLabel: true,
        dataPointShape: true,
        dataPointShapeType: 'solid',
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        extra: {
            map: {
                border: true,
                borderWidth: 1,
                borderColor: '#666666',
                fillOpacity: 0.6,
                activeBorderColor: '#F04864',
                activeFillColor: '#FACC14',
                activeFillOpacity: 1,
                mercator: false
            },
            tooltip: {
                showBox: true,
                showArrow: true,
                showCategory: false,
                borderWidth: 0,
                borderRadius: 0,
                borderColor: '#000000',
                borderOpacity: 0.7,
                bgColor: '#000000',
                bgOpacity: 0.7,
                gridType: 'solid',
                dashLength: 4,
                gridColor: '#CCCCCC',
                fontColor: '#FFFFFF',
                splitLine: true,
                horizentalLine: false,
                xAxisLabel: false,
                yAxisLabel: false,
                labelBgColor: '#FFFFFF',
                labelBgOpacity: 0.7,
                labelFontColor: '#666666'
            }
        }
    }) as never
}

// 转换点击事件的坐标
function getH5Offset(e: any) {
    e.mp = {
        changedTouches: []
    }
    e.mp.changedTouches.push({
        x: e.offsetX,
        y: e.offsetY
    })
    return e
}

function tap(e: any) {
    uChartsInstance[e.target.id as keyof typeof uChartsInstance].touchLegend(getH5Offset(e))
    uChartsInstance[e.target.id as keyof typeof uChartsInstance].showToolTip(getH5Offset(e))
}

const newValue = computed(() => props.value! - 50 + 'px')
</script>

<style lang="scss" scoped>
.content {
    width: v-bind(newValue);
    height: v-bind(newValue);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 10px #f5f5f5;
}
</style>
