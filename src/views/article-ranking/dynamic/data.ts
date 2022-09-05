/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-04 12:37:16
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-04 12:37:16
 * @FilePath     : \web-B-tmp\src\views\article-ranking\dynamic\data.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
// 指定初始数据
import i18n from '@/i18n'

const t = i18n.global.t

export default () => [
    {
        prop: 'ranking',
        label: t('article.ranking'),
        align: 'center',
        slot: 'ranking'
    },
    {
        prop: 'title',
        label: t('article.title'),
        align: 'center',
        slot: 'title',
        editable: true
    },
    {
        prop: 'author',
        label: t('article.author'),
        align: 'center',
        slot: 'author',
        editable: true
    },
    {
        prop: 'publicDate',
        label: t('article.publicDate'),
        align: 'center',
        slot: 'publicDate'
    },
    {
        prop: 'desc',
        label: t('article.desc'),
        align: 'center',
        slot: 'desc'
    },
    {
        prop: 'action',
        label: t('article.action'),
        action: true,
        align: 'center'
    }
]
