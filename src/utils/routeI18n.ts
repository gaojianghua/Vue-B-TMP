import i18n from '@/i18n'

// router 的语言切换
export const generateTitle = (title: string) => {
    return i18n.global.t('route.' + title)
}
