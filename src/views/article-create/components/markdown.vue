<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-05 12:22:43
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-13 04:30:14
 * @FilePath     : \web-B-tmp\src\views\article-create\components\markdown.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="">
        <div id="markdown-box"></div>
        <div class="mt-[20px] text-right">
            <el-button type="primary" @click="onSumitMarkdown">{{
                $t('article.commit')
            }}</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import MKEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/zh-cn'
import useStore from '@/store'
import { watchSwitchLang } from '@/utils/routeI18n'
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

// editor 实例
let mkEditor: MKEditor
let el: any
const initEditor = () => {
    mkEditor = new MKEditor({
        // el
        el,
        // 高
        height: '500px',
        // 样式
        previewStyle: 'vertical',
        // 国际化
        language: useStore().common.language === 'zh' ? 'zh-CN' : 'en'
    })
    mkEditor.getMarkdown()
}
onMounted(() => {
    el = document.querySelector('#markdown-box')
    initEditor()
})
// 提交事件
const onSumitMarkdown = async () => {
    if (props.detail && props.detail.id) {
        await editorArticle({
            id: props.detail.id,
            title: props.title,
            content: mkEditor.getHTML()
        })
    } else {
        await commitArticle({
            title: props.title,
            content: mkEditor.getHTML()
        })
    }
    mkEditor.reset()
    emits('onSuccess')
}

watchSwitchLang(() => {
    if (!el) return
    const htmlStr = mkEditor.getHTML()
    mkEditor.destroy()
    initEditor()
    mkEditor.setHTML(htmlStr)
})
watch(
    () => props.detail,
    (val: any) => {
        if (val && val.content) {
            mkEditor.setHTML(val.content)
        }
    }
)
</script>

<style lang="scss" scoped></style>
