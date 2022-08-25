<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 01:08:48
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-25 01:04:11
 * @FilePath     : \web-B-tmp\src\components\theme-select\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-dropdown v-bind="$attrs" class="border-none" trigger="click" @command="handleSetTheme">
        <!-- 图标 -->
        <div>
            <el-tooltip :content="$t('navBar.themeChange')" placement="bottom">
                <g-svg-icon name="change-theme"></g-svg-icon>
            </el-tooltip>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="color">
                    {{ $t('theme.themeColorChange') }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <div>
        <select-color v-model="selectColorVisible"></select-color>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 显示取色器
const handleSetTheme = () => {
    selectColorVisible.value = true
}

// 控制取色器显示
const selectColorVisible = ref<boolean>(false)
</script>

<style lang="scss" scoped>
svg {
    width: 100% !important;
    height: 100% !important;
}
</style>
