import { defineStore } from 'pinia'
import variables from '@/styles/variables.module.scss'
import { getItem } from '@/utils/storage'
import { LANG, MAIN_COLOR, DEFAULT_COLOR } from '@/constants'

const useCommonStore = defineStore('common', {
    state: () => {
        return {
            globalCss: variables,
            language: <string>getItem(LANG) || 'zh',
            mainColor: <string>getItem(MAIN_COLOR) || DEFAULT_COLOR
        }
    },
    actions: {
        // 设置语言
        setLanguage(newLang: string) {
            this.language = newLang
        },
        // 设置主题色
        setMainColor(newColor: string) {
            this.mainColor = newColor
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
