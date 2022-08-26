<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-07-18 16:58:19
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-26 04:30:37
 * @FilePath     : \web-B-tmp\src\App.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <router-view />
</template>

<script setup lang="ts">
import useStore from './store'
import { generateNewStyle, writeNewStyle } from '@/utils/conversion'

generateNewStyle(useStore().common.mainColor).then((newStyle: string) => {
    writeNewStyle(newStyle)
})
</script>
