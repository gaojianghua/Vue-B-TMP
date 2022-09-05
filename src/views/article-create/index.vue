<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-05 17:22:26
 * @FilePath     : \web-B-tmp\src\views\article-create\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="">
        <el-card>
            <el-input
                class="mb-[20px]"
                v-model="title"
                maxlength="20"
                clearable
                :placeholder="$t('article.title')"
            ></el-input>
            <el-tabs v-model="activeName">
                <el-tab-pane :label="$t('article.markdown')" name="markdown">
                    <markdown-vue
                        :detail="articleDetail"
                        :title="title"
                        @onSuccess="onSuccess"
                    ></markdown-vue>
                </el-tab-pane>
                <el-tab-pane :label="$t('article.richText')" name="editor">
                    <editor-vue
                        :detail="articleDetail"
                        :title="title"
                        @onSuccess="onSuccess"
                    ></editor-vue>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import editorVue from './components/editor.vue'
import markdownVue from './components/markdown.vue'
import { articleApi } from '@/api'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = ref<string>('')
const activeName = ref<string>('markdown')
// 提交成功事件
const onSuccess = () => {
    title.value = ''
}
// 获取文章详情
const articleId = route.params.id
const articleDetail = ref<any>({})
const getArticleDetail = async () => {
    articleDetail.value = await articleApi.getArticleDetail(articleId)
    title.value = articleDetail.value.title
}
if (articleId) {
    getArticleDetail()
}
</script>

<style lang="scss" scoped></style>
