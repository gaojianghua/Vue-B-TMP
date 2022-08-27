<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-27 05:50:57
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-27 14:03:57
 * @FilePath     : \web-B-tmp\src\components\tags-view\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div id="guide-tags" class="tagsView flex items-center h-[34px] py-[2px]">
        <router-link
            class="routerLink h-full w-[none] flex items-center"
            v-for="(tag, i) in useStore().common.tagsViewList"
            :key="tag.fullPath"
            :class="isActive(tag) ? 'active' : ''"
            :to="{ path: tag.fullPath }"
            :style="{
                backgroundColor: isActive(tag) ? mainBg : '',
                borderColor: isActive(tag) ? mainBg : ''
            }"
            @contextmenu.prevent="openMenu($event, i)"
        >
            {{ $t(`route.${tag.meta.title}`) }}
            <el-icon
                class="close ml-1"
                v-show="!isActive(tag)"
                name="close"
                @click.prevent.stop="onClose(i)"
                ><CloseBold
            /></el-icon>
        </router-link>
        <!-- 右键menu菜单 -->
        <context-menu-vue v-show="visible" :index="index" :style="menuStyle"></context-menu-vue>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/store'
import contextMenuVue from './context-menu.vue'
import { ref, watch } from 'vue'
import { RouteLocation, useRoute } from 'vue-router'
const route = useRoute()
// 主题色
const mainBg = ref(useStore().common.globalCss.menuBg)
/**
 * 是否被选中
 */
const isActive = (tag: RouteLocation) => {
    return tag.path === route.path
}
/**
 * 移除 tag
 */
const onClose = (i: number) => {
    useStore().common.removeTagsView({
        type: 'index',
        index: i
    })
}
/**
 * 监听主题色变化
 */
watch(
    () => useStore().common.globalCss.menuBg,
    () => {
        mainBg.value = useStore().common.globalCss.menuBg
    }
)
/**
 * 右键点击事件
 */
// 右键点击的下标
const index = ref<number>(0)
// 控制菜单显示
const visible = ref<boolean>(false)
// 菜单坐标
interface MStyle {
    left: string
    top: string
}
const menuStyle = ref<MStyle>({
    left: '0',
    top: '0'
})
const openMenu = (e: MouseEvent, i: number) => {
    const { x, y } = e
    menuStyle.value.left = x + 'px'
    menuStyle.value.top = y + 'px'
    index.value = i
    visible.value = true
}
//监听 visible
watch(visible, (val: boolean) => {
    if (val) {
        document.body.addEventListener('click', onMenuClose)
    } else {
        document.body.removeEventListener('click', onMenuClose)
    }
})
// 关闭事件
const onMenuClose = () => {
    visible.value = false
}
</script>
<style lang="scss" scoped>
.tagsView {
    border-bottom: 1px solid #e5e7eb;
    box-sizing: content-box;
    .routerLink {
        height: 30px !important;
        letter-spacing: 1px;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        color: #495060;
        padding: 0 10px;
        font-size: 12px;
        &:first-of-type {
            margin-left: 10px;
        }
        &:last-of-type {
            margin-right: 10px;
        }
        &.active {
            color: #fff;
            margin: 0 20px;
            &::after {
                content: '';
                display: inline-block;
                border-right: 6px solid transparent;
                border-bottom: 15px solid transparent;
                border-top: 15px solid v-bind(mainBg);
                border-left: 6px solid v-bind(mainBg);
                position: absolute;
                right: -12px;
                top: 0;
                z-index: 10;
            }
            &::before {
                content: '';
                display: inline-block;
                border-right: 6px solid v-bind(mainBg);
                border-bottom: 15px solid v-bind(mainBg);
                border-top: 15px solid transparent;
                border-left: 6px solid transparent;
                position: absolute;
                left: -12px;
                top: 0;
            }
        }
        .close {
            vertical-align: 2px;
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            transform-origin: 100% 50%;
            &::before {
                transform: scale(0 6);
                display: inline-block;
                vertical-align: 3px;
            }
            &:hover {
                width: 12px;
                height: 12px;
                background: #b4bccc;
                color: #fff;
            }
        }
    }
}
</style>
