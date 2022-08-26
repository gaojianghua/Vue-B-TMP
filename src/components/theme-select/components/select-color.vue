<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 21:20:18
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-26 04:29:03
 * @FilePath     : \web-B-tmp\src\components\theme-select\components\select-color.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-dialog
        :title="$t('universal.title')"
        :model-value="modelValue"
        width="22%"
        @close="onclose"
    >
        <div class="flex items-center justify-center flex-col">
            <p class="mb-2">{{ $t('theme.themeColorChange') }}</p>
            <el-color-picker v-model="mainColor" :predefine="predefineColors"></el-color-picker>
        </div>
        <template #footer>
            <el-button @click="onclose">{{ $t('universal.cancel') }}</el-button>
            <el-button type="primary" @click="onConfirm">{{ $t('universal.confirm') }}</el-button>
        </template>
    </el-dialog>
</template>

<script lang="ts">
const EMITS_MODELVALUE = 'update:modelValue'
</script>

<script setup lang="ts">
import useStore from '@/store'
import { ref } from 'vue'
import { writeNewStyle, generateNewStyle } from '@/utils/conversion'

defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
})
const emits = defineEmits([EMITS_MODELVALUE])

// 预设色值
const predefineColors: string[] = [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, .68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577'
]
// 默认色值
const mainColor = ref<string>(useStore().common.mainColor)

// 关闭事件
const onclose = () => {
    emits(EMITS_MODELVALUE, false)
}
// 确定事件
const onConfirm = async () => {
    const colors = await generateNewStyle(mainColor.value)
    writeNewStyle(colors)
    useStore().common.setMainColor(mainColor.value)
    onclose()
}
</script>

<style lang="scss" scoped></style>
