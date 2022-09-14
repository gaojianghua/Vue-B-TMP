<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-05 12:22:24
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-13 04:29:13
 * @FilePath     : \web-B-tmp\src\views\article-create\components\editor.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="">
        <div id="wangeditor"></div>
        <div class="mt-[20px] text-right">
            <el-button type="primary" @click="onSumitMarkdown">{{
                $t('article.commit')
            }}</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import Editor from 'wangeditor'
import i18next from 'i18next'
import useStore from '@/store'
import { commitArticle, editorArticle } from './commit'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: Object
    }
})
const emits = defineEmits(['onSuccess'])

// 初始化 Editor 实例
let editor: any
// 获取 dom
let el: any
const initEditor = () => {
    editor = new Editor(el)
    editor.config.zIndex = 1
    editor.config.showMenuTooltips = true
    editor.config.menuTooltipPosition = 'down'
    // 国际化
    editor.config.lang = useStore().common.language === 'zh' ? 'zh-CN' : 'en'
    editor.i18next = i18next
    editor.create()
}
onMounted(() => {
    el = document.querySelector('#wangeditor')
    initEditor()
})

// 提交事件
const onSumitMarkdown = async () => {
    if (props.detail && props.detail.id) {
        await editorArticle({
            id: props.detail.id,
            title: props.title,
            content: editor.txt.html()
        })
    } else {
        await commitArticle({
            title: props.title,
            content: editor.txt.html()
        })
    }
    editor.txt.html('')
    emits('onSuccess')
}
watch(
    () => props.detail,
    (val: any) => {
        if (val && val.content) {
            editor.txt.html(val.content)
        }
    }
)
</script>

<style lang="scss" scoped></style>
