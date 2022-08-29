/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 07:10:27
 * @FilePath     : \web-B-tmp\src\store\common.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import variables from '@/styles/variables.module.scss'
import { getItem, setItem } from '@/utils/storage'
import { LANG, MAIN_COLOR, DEFAULT_COLOR, TAGS_VIEW } from '@/constants'
import { generateColors } from '@/utils/conversion'
import { RouteLocation } from 'vue-router'

interface TPayload {
    index: number
    type: 'other' | 'right' | 'index'
}

interface NRouteLocation extends RouteLocation {
    title: string
}

const useCommonStore = defineStore('common', {
    state: () => {
        return {
            variables: variables as any,
            language: <string>getItem(LANG) || 'zh',
            mainColor: <string>getItem(MAIN_COLOR) || DEFAULT_COLOR,
            tagsViewList: <NRouteLocation[]>getItem(TAGS_VIEW) || []
        }
    },
    getters: {
        globalCss: (state) => ({
            ...state.variables,
            ...generateColors(getItem(MAIN_COLOR))
        })
    },
    actions: {
        // 设置语言
        setLanguage(newLang: string) {
            this.language = newLang
            setItem(LANG, newLang)
        },
        // 设置主题色
        setMainColor(newColor: string) {
            this.mainColor = newColor
            this.variables.menuBg = newColor
            setItem(MAIN_COLOR, newColor)
        },
        // 添加 tags
        addTagsViewList(newTag: any) {
            // 处理重复 tag
            const isFind = this.tagsViewList.find((item) => {
                return item.path === newTag.path
            })
            if (!isFind) {
                this.tagsViewList.push(newTag)
                setItem(TAGS_VIEW, this.tagsViewList)
            }
        },
        // 为指定的 tag 修改 title
        changeTagsView({ index, tag }: any) {
            this.tagsViewList[index] = tag
            setItem(TAGS_VIEW, this.tagsViewList)
        },
        // 删除 tags
        removeTagsView(payload: TPayload) {
            if (payload.type === 'index') {
                this.tagsViewList.splice(payload.index, 1)
            } else if (payload.type === 'other') {
                this.tagsViewList.splice(
                    payload.index + 1,
                    this.tagsViewList.length - payload.index + 1
                )
                this.tagsViewList.splice(0, payload.index)
            } else if (payload.type === 'right') {
                this.tagsViewList.splice(
                    payload.index + 1,
                    this.tagsViewList.length - payload.index + 1
                )
            }
            setItem(TAGS_VIEW, this.tagsViewList)
        }
    },
    persist: {
        key: 'common',
        storage: window.localStorage,
        paths: [],
        beforeRestore: (context) => {
            //console.log('Before hydration...:' + context)
        },
        afterRestore: (context) => {
            //console.log('After hydration...:' + context)
        }
    }
})

export default useCommonStore
