<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:08:08
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 04:44:47
 * @FilePath     : \web-B-tmp\src\views\profile\components\author.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div>
        <div class="flex">
            <pan-thumb :image="useStore().user.userInfo.avatar" height="60px" width="60px">
                {{ $t('profile.name') }}
            </pan-thumb>
            <div class="ml-[12px] flex flex-col justify-around">
                <span class="text-[14px] font-semibold">{{ $t('profile.name') }}</span>
                <span class="text-[14px] font-semibold">{{ $t('profile.job') }}</span>
            </div>
        </div>
        <div class="mt-[16px] text-[14px] indent-[26px]">
            {{ $t('profile.Introduction') }}
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/store'
import { ref } from 'vue'
</script>

<style lang="scss" scoped></style>
