<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-27 12:22:54
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 13:03:52
 * @FilePath     : \web-B-tmp\src\components\tags-view\context-menu.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <ul class="contextMenu">
        <li @click="onRefresh">{{ $t('tagsView.refresh') }}</li>
        <li @click="onCloseRight">{{ $t('tagsView.closeRight') }}</li>
        <li @click="onCloseOther">{{ $t('tagsView.closeOther') }}</li>
    </ul>
</template>

<script setup lang="ts">
import useStore from '@/store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    index: {
        type: Number,
        required: true
    }
})
const router = useRouter()
/**
 * 刷新页面
 * */
const onRefresh = () => {
    router.go(0)
}
/**
 * 关闭右侧
 * */
const onCloseRight = () => {
    useStore().common.removeTagsView({
        type: 'right',
        index: props.index
    })
}
/**
 * 关闭其他
 * */
const onCloseOther = () => {
    useStore().common.removeTagsView({
        type: 'other',
        index: props.index
    })
}
</script>

<style lang="scss" scoped>
.contextMenu {
    position: fixed;
    background: #fff;
    z-index: 3000;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
            background-color: #eee;
        }
    }
}
</style>
