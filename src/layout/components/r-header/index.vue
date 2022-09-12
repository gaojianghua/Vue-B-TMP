<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-12 01:35:52
 * @FilePath     : \web-B-tmp\src\layout\components\r-header\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="page flex items-center">
        <!-- logo -->
        <el-icon class="cursor-pointer" id="guide-hamburger" size="25px" @click="toggle">
            <Expand v-if="modelValue" />
            <Fold v-else />
        </el-icon>
        <!-- 面包屑 -->
        <breadcrumb id="guide-breadcrumb"></breadcrumb>
        <!-- 用户信息 -->
        <div class="ml-auto flex items-center">
            <!-- 引导导航 -->
            <guide-page class="w-[30px] h-[30px] mx-2"></guide-page>
            <!-- 页面搜索 -->
            <header-search></header-search>
            <!-- 全屏切换 -->
            <screen-full class="w-[30px] h-[30px] mx-2"></screen-full>
            <!-- 换肤 -->
            <theme-select class="w-[32px] h-[32px] mr-2"></theme-select>
            <!-- 选择语言 -->
            <lang-select class="w-[32px] h-[32px] mr-2"></lang-select>
            <!-- 头像 -->
            <el-dropdown trigger="click">
                <div class="flex items-center">
                    <el-avatar
                        size="default"
                        shape="circle"
                        :src="useStore().user.userInfo.avatar"
                    ></el-avatar>
                    <el-icon class="ml-1">
                        <Tools />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <router-link to="/works">
                            <el-dropdown-item>{{ $t('navBar.works') }}</el-dropdown-item>
                        </router-link>
                        <router-link to="/profile">
                            <el-dropdown-item>{{ $t('navBar.profile') }}</el-dropdown-item>
                        </router-link>
                        <a target="_blank" :href="useStore().user.userInfo.homePage">
                            <el-dropdown-item>{{ $t('navBar.document') }}</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided @click="onLogout">{{
                            $t('navBar.logout')
                        }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb.vue'
import useStore from '@/store'

const props = defineProps({
    modelValue: {
        required: true,
        type: Boolean
    }
})
const emits = defineEmits(['update:modelValue'])
const toggle = () => {
    emits('update:modelValue', !props.modelValue)
}
/**
 * 退出登录
 */
const onLogout = () => {
    useStore().user.logout()
}
</script>

<style lang="scss" scoped>
.page {
    padding: 0 20px;
    height: 60px;
}
</style>
