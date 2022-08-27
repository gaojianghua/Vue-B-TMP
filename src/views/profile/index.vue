<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 01:22:43
 * @FilePath     : \web-B-tmp\src\views\profile\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="">
        <el-row :gutter="24">
            <el-col :span="6" :offset="0">
                <project-card-vue class=""></project-card-vue>
            </el-col>
            <el-col :span="18" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <el-tabs v-model="activeName">
                        <el-tab-pane :label="$t('profile.feature')" name="feature">
                            <feature-vue></feature-vue>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('profile.chapter')" name="chapter">
                            <chapter-vue></chapter-vue>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('profile.author')" name="author">
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

const activeName = ref('featrueVue')
</script>

<style lang="scss" scoped></style>
