<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-27 13:21:04
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 14:12:53
 * @FilePath     : \web-B-tmp\src\components\guide-page\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="cursor-pointer">
        <el-tooltip :content="$t('navBar.guide')">
            <g-svg-icon id="guide-start" name="guide" @click="onGuideClick"></g-svg-icon>
        </el-tooltip>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import steps from './steps'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
// 初始化
let driver: any = null
onMounted(() => {
    driver = new Driver({
        allowClose: false,
        closeBtnText: i18n.t('guide.close'),
        nextBtnText: i18n.t('guide.next'),
        prevBtnText: i18n.t('guide.prev')
    })
})
// 开始引导
const onGuideClick = () => {
    // 指定引导步骤
    driver.defineSteps(steps(i18n))
    // 开始
    driver.start()
}
</script>

<style lang="scss" scoped>
.driver-fix-stacking {
    z-index: 1000004 !important;
}
</style>
