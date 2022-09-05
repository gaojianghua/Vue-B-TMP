<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-05 09:14:55
 * @FilePath     : \web-B-tmp\src\views\article-ranking\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="">
        <el-card>
            <div class="flex items-center">
                <span class="font-semibold text-[14px] mr-5">{{ $t('article.dynamicTitle') }}</span>
                <el-checkbox-group v-model="selectDynamicLable">
                    <el-checkbox v-for="(item, i) in data" :key="i" :label="item.label">
                        {{ item.label }}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </el-card>
        <el-card class="mt-[20px]">
            <g-table
                :options="tableColumns"
                :data="articleListData"
                elementLoadingText="加载中..."
                elementLoadingBackground="rgba(0,0,0,.8)"
                :element-loading-svg="svg"
                element-loading-svg-view-box="-10, -10, 50, 50"
                pagination
                paginationAlign="center"
                stripe
                border
                :isLoading="isLoading"
                :total="total"
                :currentPage="query.current"
                :pageSize="query.pageSize"
                v-model:editRowIndex="editRowIndex"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                ref="tableRef"
            >
                <template #ranking="{ scope }">
                    <span>{{ scope.row.ranking }}</span>
                </template>
                <template #title="{ scope }">
                    {{ scope.row.title }}
                </template>
                <template #author="{ scope }">
                    {{ scope.row.author }}
                </template>
                <template #publicDate="{ scope }">
                    {{ $filters.relativeTime(scope.row.publicDate) }}
                </template>
                <template #desc="{ scope }">
                    {{ scope.row.desc }}
                </template>
                <template #action="{ scope }">
                    <el-button size="small" type="primary" @click="onShowArticle(scope.row.id)">{{
                        $t('article.show')
                    }}</el-button>
                    <el-button size="small" type="danger" @click="onRemoveArticle(scope.row)">{{
                        $t('article.remove')
                    }}</el-button>
                </template>
            </g-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onActivated, onMounted, ref } from 'vue'
import { articleApi } from '@/api'
import { watchSwitchLang } from '@/utils/routeI18n'
import { IList } from '@/types/staff'
import { data, selectDynamicLable, tableColumns } from './dynamic'
import Sortable from 'sortablejs'
import { ElMessage, ElMessageBox } from 'element-plus'
import i18n from '@/i18n'
import router from '@/router'

const tableRef = ref<any | null>(null)
const initSortable = (articleListData: any, cb: Function) => {
    tableRef.value = document.querySelector('.el-scrollbar__view > table > tbody')
    /**
     * 要拖拽的元素
     * 配置对象
     */
    Sortable.create(tableRef.value, {
        // 拖拽时的类名
        ghostClass: 'sortable-ghost',
        // 拖拽结束的回调
        async onEnd(e: any) {
            const { newIndex, oldIndex } = e
            await articleApi.articleSort({
                initRanking: articleListData.value[oldIndex].ranking,
                finalRanking: articleListData.value[newIndex].ranking
            })
            ElMessage.success(i18n.global.t('article.sortSuccess'))
            articleListData.value = []
            cb && cb()
        }
    })
}

const query = ref<IList>({
    current: 1,
    pageSize: 10,
    name: ''
})
const isLoading = ref<boolean>(false)
const total = ref<number>(0)
const editRowIndex = ref<string>('')
const svg = `
        <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
            " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `
/**
 * 获取数据
 * */
const articleListData = ref([])
const getArticleListData = async () => {
    isLoading.value = true
    const data = await articleApi.getArticleList({
        current: query.value.current,
        pageSize: query.value.pageSize
    })
    console.log(data)
    isLoading.value = false
    articleListData.value = data.rows
    total.value = data.total
}
// 列表 size 变化事件
const handleSizeChange = (val: number) => {
    query.value.pageSize = val
    getArticleListData()
}
// 列表选中页变化事件
const handleCurrentChange = (val: number) => {
    query.value.current = val
    getArticleListData()
}
// 点击查看
const onShowArticle = (id: number) => {
    router.push(`/article/${id}`)
}
// 点击删除
const onRemoveArticle = (row: any) => {
    ElMessageBox.confirm(
        i18n.global.t('article.dialogTitle1') + row.title + i18n.global.t('article.dialogTitle2'),
        {
            type: 'warning'
        }
    )
        .then(async () => {
            await articleApi.removeArticle({ id: row.id })
            getArticleListData()
            ElMessage.success(i18n.global.t('article.removeSuccess'))
        })
        .catch((err: Error) => {
            console.log(err)
        })
}
getArticleListData()
watchSwitchLang(getArticleListData)
onActivated(getArticleListData)
onMounted(() => {
    initSortable(articleListData, getArticleListData)
})
</script>

<style lang="scss" scoped>
:deep(.sortable-ghost) {
    opacity: 0.6;
    color: #fff;
    background-color: #304156;
}
</style>
