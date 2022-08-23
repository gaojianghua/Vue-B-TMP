import http from '@/utils/request'
import * as T from './types'

const userApi: T.IUserApi = {
    // 获取用户信息
    getProfile() {
        return http.get('/user/profile')
    },
    // 修改用户信息
    putProfile(query) {
        return http.put('/user/profile', query)
    }
}
export default userApi
