<template>
    <el-container>
        <el-aside width="auto" :style="{ backgroundColor: useStore().common.globalCss.menuBg }">
            <l-aside :collapse="isCollapse" />
        </el-aside>
        <el-container>
            <el-header>
                <r-header v-model="isCollapse" />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import LAside from './components/l-side/index.vue'
import RHeader from './components/r-header/index.vue'
import { ref } from 'vue'
import useStore from '@/store'

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
