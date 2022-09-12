<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-12 02:21:11
 * @FilePath     : \web-B-tmp\src\views\profile\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="">
        <el-row :gutter="24">
            <el-col :span="6" :offset="0">
                <project-card-vue class="" :features="featureData"></project-card-vue>
            </el-col>
            <el-col :span="18" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <el-tabs v-model="activeName">
                        <el-tab-pane :label="$t('profile.course')" name="feature">
                            <feature-vue :features="featureData"></feature-vue>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('profile.progress')" name="chapter">
                            <chapter-vue></chapter-vue>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('profile.conclusion')" name="author">
                            <author-vue></author-vue>
                        </el-tab-pane>
                    </el-tabs>

                    <!-- card body -->
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import authorVue from './components/author.vue'
import chapterVue from './components/chapter.vue'
import featureVue from './components/feature.vue'
import projectCardVue from './components/project-card.vue'
import { userApi } from '@/api'
import { watchSwitchLang } from '@/utils/routeI18n'

const activeName = ref('feature')

/**
 * 获取数据
 */
const featureData = ref<any>([])
const getFeatureData = async () => {
    featureData.value = await userApi.getFeature()
    console.log(featureData.value)
}
getFeatureData()
watchSwitchLang(getFeatureData)
</script>

<style lang="scss" scoped></style>
