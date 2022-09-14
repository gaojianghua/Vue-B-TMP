/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-05 13:10:51
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-13 04:29:05
 * @FilePath     : \web-B-tmp\src\views\article-create\components\commit.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { articleApi } from '@/api'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'

const t = i18n.global.t

export const commitArticle = async (data: any) => {
    const res = await articleApi.createArticle(data)
    ElMessage.success(t('article.createSuccess'))
    return res
}

export const editorArticle = async (data: any) => {
    const res = await articleApi.editorArticle(data)
    ElMessage.success(t('article.createSuccess'))
    return res
}
