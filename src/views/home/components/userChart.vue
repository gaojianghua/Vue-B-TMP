<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-13 22:22:24
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-14 22:21:48
 * @FilePath     : \web-B-tmp\src\views\home\components\userChart.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="content p-[10px] w-min flex flex-col items-center">
        <title-text-vue><span class="z-10">应用访问统计</span></title-text-vue>
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
            categories: ['2022', '2021', '2020', '2019', '2018'],
            series: [
                {
                    name: '访问量',
                    data: [200123, 214536, 253281, 452233, 322313]
                },
                {
                    name: '使用量',
                    data: [198886, 200237, 180956, 352891, 267548]
                }
            ]
        }
        drawCharts('gaojianghua', res)
    }, 500)
}

function drawCharts(id: any, data: any) {
    const ctx = CanvasDom.value.getContext('2d')
    uChartsInstance[id as keyof typeof uChartsInstance] = new uCharts({
        type: 'bar',
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
            '#1880fF',
            '#91CB74',
            '#FAC858',
            '#EE6666',
            '#73C0DE',
            '#3CA272',
            '#FC8452',
            '#9A60B4',
            '#ea7ccc'
        ],
        padding: [15, 55, 0, 5],
        fontSize: 13,
        fontColor: '#333',
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
            fontColor: '#333',
            lineHeight: 11,
            hiddenColor: '#CECECE',
            itemGap: 10
        },
        xAxis: {
            boundaryGap: 'justify',
            disableGrid: true,
            min: 0,
            axisLine: false,
            disabled: true,
            axisLineColor: '#333',
            calibration: false,
            fontColor: '#333',
            fontSize: 13,
            rotateLabel: false,
            rotateAngle: 45,
            itemCount: 5,
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
        extra: {
            bar: {
                type: 'group',
                width: 18,
                meterBorde: 1,
                meterFillColor: '#FFFFFF',
                activeBgColor: '#000000',
                activeBgOpacity: 0.2,
                seriesGap: 1,
                categoryGap: 5,
                barBorderCircle: true,
                linearType: 'custom',
                linearOpacity: 0.8,
                customColor: ['#18c0fF', '#91ff74'],
                colorStop: 0
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
