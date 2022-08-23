import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constants'
import { getItem, setItem } from './storage'

/**
 * 获取时间戳
 */
export const getTimeStamp = () => {
    return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export const setTimeStamp = () => {
    setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时
 */
export const isCheckTimeout = () => {
    const currentTime = Date.now()
    const timeStamp = getTimeStamp()
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
