import i18n from '@/i18n'

export const validatePassword = () => {
    return (rule: any, value: string, callback: Function) => {
        if (value.length < 6) {
            callback(new Error(i18n.global.t('login.passwordRule')))
        } else {
            callback()
        }
    }
}
