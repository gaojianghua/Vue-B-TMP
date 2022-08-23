import router from './index'
import useStore from '@/store'
import { isNull } from '@/utils/conversion'

// 白名单
const whiteList = ['/login']

/**
 * @description  : 路由前置守卫
 * @param         {*} to 目标地址
 * @param         {*} from 当前地址
 * @param         {*} next 是否跳转
 * @return        {*} 无
 */
router.beforeEach(async (to, from, next) => {
    // 已登录
    if (useStore().user.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            // 判断用户信息是否存在
            if (isNull(useStore().user.userInfo)) {
                await useStore().user.getProfile()
            }
            next()
        }
    } else {
        // 未登录
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next('/login')
        }
    }
})
