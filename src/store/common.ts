import { defineStore } from 'pinia'
import variables from '@/styles/variables.module.scss'
import { getItem } from '@/utils/storage'
import { LANG } from '@/constants'

const useCommonStore = defineStore('common', {
    state: () => {
        return {
            globalCss: variables,
            language: getItem(LANG) || 'zh'
        }
    },
    actions: {
        setLanguage(newLang: string) {
            this.language = newLang
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
