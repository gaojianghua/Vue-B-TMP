<template>
    <div>
        <!-- 标题 -->
        <h2 class="text-center py-[12px] font-semibold">{{ articleDetail.title }}</h2>
        <!-- 头部 -->
        <div class="flex items-center py-[26px]">
            <span class="mr-[20px] text-[14px] text-[#555666]"
                >{{ $t('article.author') }}: {{ articleDetail.author }}</span
            >
            <span class="mr-[20px] text-[14px] text-[#999aaa]"
                >{{ $t('article.publicDate') }}:
                {{ $filters.relativeTime(articleDetail.publicDate) }}</span
            >
            <el-button class="ml-auto" type="text" @click="onEditArticle">{{
                $t('article.edit')
            }}</el-button>
        </div>
        <!-- 内容 -->
        <div class="content" v-html="articleDetail.content"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { articleApi } from '@/api'
import { useRoute, useRouter } from 'vue-router'

// 获取数据
const route = useRoute()
const router = useRouter()
const articleId = route.params.id
const articleDetail = ref<any>({})
const getArticleDetail = async () => {
    articleDetail.value = await articleApi.getArticleDetail({ id: articleId })
}
getArticleDetail()

// 编辑
const onEditArticle = () => {
    router.push(`/article/editor/${articleId}`)
}
</script>

<style lang="scss" scoped>
.content {
    padding: 20px 0;
    border-top: 1px solid #d4d4d4;
}
</style>
