<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-03 05:15:16
 * @FilePath     : \web-B-tmp\src\views\article-ranking\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="">
        <el-card> </el-card>
        <el-card class="mt-[20px]">
            <g-table
                :options="options"
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
                    <el-button size="small" type="danger" @click="onRemoveArticle(scope.row.id)">{{
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
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const i18n = useI18n()
const router = useRouter()
// table头部配置
let options = ref<any[]>([])
const initOptions = () => {
    options.value = [
        {
            prop: 'ranking',
            label: i18n.t('article.ranking'),
            align: 'center',
            slot: 'ranking'
        },
        {
            prop: 'title',
            label: i18n.t('article.title'),
            align: 'center',
            slot: 'title',
            editable: true
        },
        {
            prop: 'author',
            label: i18n.t('article.author'),
            align: 'center',
            slot: 'author',
            editable: true
        },
        {
            prop: 'publicDate',
            label: i18n.t('article.publicDate'),
            align: 'center',
            slot: 'publicDate'
        },
        {
            prop: 'desc',
            label: i18n.t('article.desc'),
            align: 'center',
            slot: 'desc'
        },
        {
            label: i18n.t('article.action'),
            action: true,
            align: 'center'
        }
    ]
}
initOptions()
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
const onShowArticle = (id: number) => {}
// 点击删除
const onRemoveArticle = (id: number) => {}

onMounted(() => {
    getArticleListData()
})
watchSwitchLang(getArticleListData, initOptions)
onActivated(getArticleListData)
</script>

<style lang="scss" scoped></style>
