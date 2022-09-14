<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-23 02:35:27
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-12 20:09:28
 * @FilePath     : \web-B-tmp\src\components\lang-select\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-dropdown class="border-none" trigger="click" @command="handleSetLanguage">
        <div>
            <el-tooltip :content="$t('navBar.lang')" placement="bottom" :effect="effect">
                <g-svg-icon id="guide-lang" name="language"></g-svg-icon>
            </el-tooltip>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    :disabled="language === item.key"
                    v-for="item in languages"
                    :key="item.key"
                    :command="item.key"
                >
                    {{ item.title }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import useStore from '@/store'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

defineProps({
    effect: {
        type: String,
        default: 'dark',
        validator(val: string) {
            return ['dark', 'light'].indexOf(val) !== -1
        }
    }
})

// 获取全局语言状态
const language = computed(() => useStore().common.language)

// 语言类型
const languages = ref([
    {
        key: 'zh',
        title: '中文'
    },
    {
        key: 'en',
        title: 'English'
    }
])
// 获取 i18n 实例
const i18n = useI18n()
// 选择语言类型事件
const handleSetLanguage = (lang: string) => {
    i18n.locale.value = lang
    useStore().common.setLanguage(lang)
    ElMessage.success(i18n.t('toast.switchLangSuccess'))
}
</script>

<style lang="scss" scoped></style>
