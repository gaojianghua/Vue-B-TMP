/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-26 05:14:34
 * @FilePath     : \web-B-tmp\src\store\common.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import variables from '@/styles/variables.module.scss'
import { getItem, setItem } from '@/utils/storage'
import { LANG, MAIN_COLOR, DEFAULT_COLOR } from '@/constants'
import { generateColors } from '@/utils/conversion'

const useCommonStore = defineStore('common', {
    state: () => {
        return {
            variables: variables as any,
            language: <string>getItem(LANG) || 'zh',
            mainColor: <string>getItem(MAIN_COLOR) || DEFAULT_COLOR
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
        }
    },
    persist: {
        key: 'common',
        storage: window.localStorage,
        paths: [],
        beforeRestore: (context) => {
            console.log('Before hydration...:' + context)
        },
        afterRestore: (context) => {
            console.log('After hydration...:' + context)
        }
    }
})

export default useCommonStore
