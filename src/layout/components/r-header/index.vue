<template>
    <div class="page flex items-center">
        <!-- logo -->
        <el-icon class="cursor-pointer" size="25px" @click="toggle">
            <Expand v-if="modelValue" />
            <Fold v-else />
        </el-icon>
        <!-- 面包屑 -->
        <breadcrumb></breadcrumb>
        <!-- 用户信息 -->
        <div class="ml-auto flex items-center">
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
                        <router-link to="/">
                            <el-dropdown-item>{{ $t('navBar.home') }}</el-dropdown-item>
                        </router-link>
                        <a target="_blank" href="#">
                            <el-dropdown-item>{{ $t('navBar.course') }}</el-dropdown-item>
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
