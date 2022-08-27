<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:07:07
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 04:18:27
 * @FilePath     : \web-B-tmp\src\views\profile\components\feature.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-collapse v-model="activeName" accordion>
        <el-collapse-item
            v-for="item in features"
            :key="item.id"
            :title="item.title"
            :name="item.id"
        >
            <!-- content -->
            <div v-html="item.content"></div>
        </el-collapse-item>
    </el-collapse>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
defineProps({
    features: {
        type: Array as PropType<any[]>,
        required: true
    }
})
const activeName = ref(0)
</script>

<style lang="scss" scoped>
:deep(.el-collapse-item__header) {
    font-weight: bold;
}
.el-collapse-item {
    :deep(a) {
        color: #2d62f7;
        margin: 0 4px;
    }
}
</style>
