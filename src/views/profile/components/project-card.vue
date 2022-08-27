<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:06:25
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 03:46:08
 * @FilePath     : \web-B-tmp\src\views\profile\components\project-card.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-card class="text-[14px] text-[#777]">
        <template #header>
            <div class="header">
                <span>{{ $t('profile.introduce') }}</span>
            </div>
        </template>
        <div class="profile text-center">
            <!-- 头像 -->
            <div class="box-header">
                <pan-thumb :image="useStore().user.userInfo.avatar" height="100px" width="100px">
                    <div>Hello</div>
                    {{ useStore().user.userInfo.title }}
                </pan-thumb>
            </div>
            <!-- 姓名 && 角色 -->
            <div class="box-center pt-[10px]">
                <div class="user-name font-semibold">
                    {{ useStore().user.userInfo.nickname }}
                </div>
                <div class="user-role pt-[10px] font-normal">
                    {{ useStore().user.userInfo.title }}
                </div>
            </div>
        </div>
        <!-- 简介 -->
        <div class="project mt-[20px] text-[#606266]">
            <div class="section mb-[36px]">
                <div
                    class="section-header flex items-center border-b border-solid border-[#dfe6ec] pb-[10px] mb-[10px] font-bold"
                >
                    <g-svg-icon class="w-[1rem] h-[1rem]" name="introduce"></g-svg-icon>
                    <span class="pl-[4px]">{{ $t('profile.projectIntroduction') }}</span>
                </div>
                <div class="section-body">
                    <div class="mt-[10px] text-[14px] mb-[2px]">
                        {{ $t('profile.muted') }}
                    </div>
                </div>
            </div>
            <!-- 功能 -->
            <div class="section">
                <div
                    class="section-header flex items-center border-b border-solid border-[#dfe6ec] pb-[10px] mb-[10px] font-bold"
                >
                    <g-svg-icon class="w-[1rem] h-[1rem]" name="reward"></g-svg-icon>
                    <span class="pl-[4px]">{{ $t('profile.projectFunction') }}</span>
                </div>
                <div class="section-body">
                    <div
                        v-for="item in features"
                        :key="item.id"
                        class="mt-[10px] text-[14px] mb-[2px]"
                    >
                        <div>{{ item.title }}</div>
                        <el-progress :percentage="item.percentage" status="success"></el-progress>
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import useStore from '@/store'

defineProps({
    features: {
        type: Array as PropType<any[]>,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>
