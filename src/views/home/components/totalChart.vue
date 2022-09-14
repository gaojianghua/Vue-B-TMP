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
    <div class="content p-[10px] w-min flex flex-col items-center">
        <title-text-vue><span class="z-10">文章应用分析</span></title-text-vue>
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
import { onMounted, ref } from 'vue'
import uCharts from '@qiun/ucharts'
import titleTextVue from './titleText.vue'

let uChartsInstance: any = {}
const CanvasDom = ref()
const cWidth = ref(380)
const cHeight = ref(320)

onMounted(() => {
    getServerData()
})

function getServerData() {
    //模拟从服务器获取数据时的延时
    setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
            categories: ['阅读总量', '收藏总量', '点赞总量', '评论总量', '分享总量'],
            series: [
                {
                    name: '手机端',
                    data: [20176403, 17038792, 10602580, 10600589, 18009482]
                },
                {
                    name: '网页端',
                    data: [25689412, 16635712, 14682368, 10947136, 13085024]
                }
            ]
        }
        drawCharts('gaojianghua', res)
    }, 500)
}

function drawCharts(id: any, data: any) {
    const ctx = CanvasDom.value.getContext('2d')
    uChartsInstance[id as keyof typeof uChartsInstance] = new uCharts({
        type: 'radar',
        context: ctx,
        width: cWidth.value,
        height: cHeight.value,
        categories: data.categories,
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
        padding: [5, 5, 5, 5],
        fontSize: 13,
        fontColor: '#333',
        dataLabel: false,
        dataPointShape: true,
        dataPointShapeType: 'solid',
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        legend: {
            show: true,
            position: 'bottom',
            lineHeight: 25,
            float: 'center',
            padding: 5,
            margin: 5,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            fontSize: 13,
            fontColor: '#333',
            hiddenColor: '#CECECE',
            itemGap: 10
        },
        extra: {
            radar: {
                gridType: 'radar',
                gridColor: '#666',
                gridCount: 3,
                opacity: 0.3,
                max: 30000000,
                gridEval: 1,
                axisLabel: true,
                axisLabelTofix: 0,
                labelColor: '#333',
                labelPointShow: true,
                labelPointRadius: 3,
                labelPointColor: '#666',
                border: true,
                borderWidth: 1,
                linearType: 'custom',
                customColor: ['#73C0DE', '#3CA272']
            },
            tooltip: {
                showBox: true,
                showArrow: true,
                showCategory: false,
                borderWidth: 0,
                borderRadius: 5,
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
                labelBgOpacity: 0.3,
                labelFontColor: '#333'
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
</script>

<style lang="scss" scoped>
.content {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 10px #f5f5f5;
}
</style>
