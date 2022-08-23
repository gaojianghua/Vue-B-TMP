<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 01:51:30
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-24 02:31:29
 * @FilePath     : \web-B-tmp\src\secondary\chooseDate\src\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div style="display: flex">
        <div style="margin-right: 20px">
            <el-date-picker
                v-model="startDate"
                type="date"
                :placeholder="startPlaceholder"
                :disabledDate="startDisabledDate"
                v-bind="$attrs.startOptions"
            ></el-date-picker>
        </div>
        <div>
            <el-date-picker
                v-model="endDate"
                type="date"
                :placeholder="endPlaceholder"
                :disabled="endDateDisabled"
                :disabledDate="endDisabledDate"
                v-bind="$attrs.endOptions"
            ></el-date-picker>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

let props = defineProps({
    // 开始日期的占位符
    startPlaceholder: {
        type: String,
        default: '请选择开始日期'
    },
    // 结束日期的占位符
    endPlaceholder: {
        type: String,
        default: '请选择结束日期'
    },
    // 是否禁用选择今天之前的日期
    disableToday: {
        type: Boolean,
        default: true
    }
})

let emits = defineEmits(['startChange', 'endChange'])

// 开始日期
let startDate = ref<Date | any>()
// 结束日期
let endDate = ref<Date | any>()
// 控制结束日期的禁用状态
let endDateDisabled = ref<boolean>(true)

// 禁用开始日期的函数
let startDisabledDate = (time: Date) => {
    if (props.disableToday) return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
}
// 禁用结束日期的函数
let endDisabledDate = (time: Date) => {
    if (startDate.value) {
        return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
    }
}

// 监听开始的日期
watch(
    () => startDate.value,
    (val) => {
        if (!val) {
            endDateDisabled.value = true
            endDate.value = ''
        } else {
            emits('startChange', val)
            endDateDisabled.value = false
        }
    }
)
// 监听结束的日期
watch(
    () => endDate.value,
    (val) => {
        if (val) {
            emits('endChange', {
                startDate: startDate.value,
                endDate: val
            })
        }
    }
)
</script>

<style lang="scss" scoped></style>
