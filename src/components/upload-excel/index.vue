<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-29 06:40:08
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-29 13:58:04
 * @FilePath     : \web-B-tmp\src\components\upload-excel\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="flex justify-center items-center flex-col">
        <div
            class="flex justify-center items-center flex-col border-dashed border-[1px] rounded border-[#bbb] w-[100%] h-[600px]"
            @drop="handleDrop"
            @dragover.stop.prevent="handleDragover"
            @dragenter.stop.prevent="handleDragenter"
        >
            <el-icon color="#999" :size="260"><UploadFilled /></el-icon>
            <span class="mt-2 text-[#555]">{{ $t('uploadExcel.drop') }}</span>
        </div>
        <div class="mt-[50px]">
            <el-button
                class="w-[200px] h-[40px]"
                type="primary"
                :loading="loading"
                @click="handleUpload"
            >
                {{ $t('uploadExcel.upload') }}
            </el-button>
        </div>
        <input
            class="input"
            type="file"
            ref="excelUploadInput"
            accept=".xlsx, .xls"
            @change="handleChange"
        />
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import * as XLSX from 'xlsx'
import { getHeaderRow, isExcel } from './utils'

const props = defineProps({
    // 上传前的回调
    beforeUpload: {
        type: Function
    },
    // 上传成功的回调
    onSuccess: {
        type: Function
    }
})
console.log(XLSX)

// loading 控制
const loading = ref(false)
// input
const excelUploadInput = ref()
// input change事件
const handleChange = (e: any) => {
    const files = e.target.files
    const rowFile = files[0]
    if (!rowFile) return
    upload(rowFile)
}
/**
 * 触发上传事件
 */
const upload = (rowFile: File) => {
    excelUploadInput.value.value = null
    // 没有指定上传前回调
    if (!props.beforeUpload) {
        readerData(rowFile)
        return
    }
    // 指定了上传回调, 只有返回 true 才执行后续操作
    const before = props.beforeUpload(rowFile)
    if (before) {
        readerData(rowFile)
    }
}
/**
 * 读取数据(异步)
 */
const readerData = (rowFile: File) => {
    loading.value = true
    return new Promise<void>((resolve, reject) => {
        const reader = new FileReader()
        // 读取操作完成时触发
        reader.onload = (e) => {
            // 获取到解析后的数据
            const data = e.target?.result
            // 利用 XLSX 对数据进行解析
            const workbook = XLSX.read(data, { type: 'array' })
            // 获取第一张表格名称
            const firstSheetName = workbook.SheetNames[0]
            // 读取 sheet1 (第一张表格) 的数据
            const workSheet = workbook.Sheets[firstSheetName]
            // 解析数据表头
            const header = getHeaderRow(workSheet)
            // 解析数据体
            const results = XLSX.utils.sheet_to_json(workSheet)
            // 传入解析之后的数据
            generateData({ header, results })
            // 处理 loading
            loading.value = false
            // 成功回调
            resolve()
        }
        reader.readAsArrayBuffer(rowFile)
    })
}
// 根据导入内容, 生成数据
const generateData = (excelData: any) => {
    props.onSuccess && props.onSuccess(excelData)
}
// 点击上传
const handleUpload = () => {
    excelUploadInput.value.click()
}
// 拖拽上传
const handleDrop = (e: any) => {
    // 上传中
    if (loading.value) return
    const files = e.dataTransfer.files
    if (files.length !== 1) {
        ElMessage.error('必须要有一个文件')
        return
    }
    const rowFile = files[0]
    if (isExcel(rowFile)) {
        ElMessage.error('文件必须是 .xlsx, .xls, .csv 格式')
        return
    }
    upload(rowFile)
}
// 拖拽到目标区域
const handleDragover = (e: any) => {
    e.dataTransfer.dropEffect = 'copy'
}
const handleDragenter = () => {}
</script>

<style lang="scss" scoped>
.input {
    display: none;
    z-index: -10;
}
</style>
