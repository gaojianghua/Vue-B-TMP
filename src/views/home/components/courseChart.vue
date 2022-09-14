<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-14 20:13:17
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-14 22:21:16
 * @FilePath     : \web-B-tmp\src\views\home\components\courseChart.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="content p-[10px] w-min flex flex-col items-center">
        <title-text-vue><span class="z-10">课程分类统计</span></title-text-vue>
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
            categories: ['前端', '后端', 'Android', 'IOS', '人工智能', '开发工具', '代码人生'],
            series: [
                {
                    name: '课程总量',
                    data: [57, 48, 11, 3, 3, 3, 3]
                },
                {
                    name: '购买总量',
                    data: [192539, 135778, 14699, 1247, 3503, 9471, 5885]
                }
            ]
        }
        drawCharts('gaojianghua', res)
    }, 500)
}

function drawCharts(id: any, data: any) {
    const ctx = CanvasDom.value.getContext('2d')
    uChartsInstance[id as keyof typeof uChartsInstance] = new uCharts({
        type: 'column',
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
        padding: [15, 15, 0, 5],
        fontSize: 13,
        fontColor: '#666666',
        dataLabel: true,
        dataPointShape: true,
        dataPointShapeType: 'solid',
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        legend: {
            show: true,
            position: 'bottom',
            float: 'center',
            padding: 5,
            margin: 5,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            fontSize: 13,
            fontColor: '#666666',
            lineHeight: 11,
            hiddenColor: '#CECECE',
            itemGap: 10
        },
        xAxis: {
            disableGrid: true,
            disabled: false,
            axisLine: false,
            axisLineColor: '#CCCCCC',
            calibration: false,
            fontColor: '#666666',
            fontSize: 13,
            rotateLabel: true,
            rotateAngle: 45,
            itemCount: 5,
            boundaryGap: 'center',
            splitNumber: 5,
            gridColor: '#CCCCCC',
            gridType: 'solid',
            dashLength: 4,
            gridEval: 1,
            scrollShow: false,
            scrollAlign: 'left',
            scrollColor: '#A6A6A6',
            scrollBackgroundColor: '#EFEBEF',
            formatter: ''
        },
        yAxis: {
            data: [
                {
                    min: 0
                }
            ],
            disabled: true,
            disableGrid: true,
            splitNumber: 5,
            gridType: 'solid',
            dashLength: 8,
            gridColor: '#CCCCCC',
            padding: 10,
            showTitle: false
        },
        extra: {
            column: {
                type: 'meter',
                width: 20,
                activeBgColor: '#000000',
                activeBgOpacity: 0.08,
                seriesGap: 2,
                categoryGap: 5,
                barBorderCircle: true,
                linearType: 'none',
                linearOpacity: 1,
                colorStop: 0,
                meterBorder: 1,
                meterFillColor: '#FFFFFF'
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
            },
            markLine: {
                type: 'solid',
                dashLength: 4,
                data: []
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
