<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 14:03:40
 * @FilePath     : \web-B-tmp\src\layout\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-container>
        <el-aside width="auto">
            <l-aside :collapse="isCollapse" />
        </el-aside>
        <el-container>
            <el-header>
                <r-header v-model="isCollapse" />
            </el-header>
            <tags-view></tags-view>
            <el-main>
                <r-main></r-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import LAside from './components/l-side/index.vue'
import RHeader from './components/r-header/index.vue'
import RMain from './components/r-main/index.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-container {
    height: 100vh;
}
.el-header {
    padding: 0;
    border-bottom: 1px solid #eee;
}

svg {
    width: 1em !important;
    height: 1em !important;
}
</style>
